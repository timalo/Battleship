function shipCreator(xStart, yStart, length, direction) {
  return {
    xStart,
    yStart,
    length,
    hp: length,
    isSunk: false,
    direction,
    hit() {
      this.hp -= 1;
      this.checkSunk();
    },
    checkSunk() {
      if (this.hp === 0) {
        this.isSunk = true;
      }
    },
  };
}

function gameBoardCreator() {
  const board = Array(10)
    .fill(undefined)
    .map(() => Array(10).fill(undefined));
  return {
    board,
    placeShip(shipSize, xCoord, yCoord, direction) {
      // ship direction is either "x" or "y"
      if (
        (direction === "x" && xCoord + shipSize > 10) ||
        (direction === "y" && yCoord + shipSize > 10)
      ) {
        throw new Error("Ship out of bounds");
      } else {
        for (let i = 0; i < shipSize; i += 1) {
          if (direction === "x" && board[yCoord][xCoord + i] !== undefined) {
            throw new Error("Ship overlaps another ship.");
          } else if (
            direction === "y" &&
            board[yCoord + i][xCoord] !== undefined
          ) {
            throw new Error("Ship overlaps another ship.");
          }
          for (let j = -1; j <= 1; j += 1) {
            for (let k = -1; k <= 1; k += 1) {
              if (
                yCoord + j >= 0 &&
                yCoord + j <= 9 &&
                xCoord + k >= 0 &&
                xCoord + k <= 9
              ) {
                if (
                  direction === "x" &&
                  board[yCoord + j][xCoord + k + i] !== undefined &&
                  typeof board[yCoord + j][xCoord + k + i] === "object"
                ) {
                  throw new Error("Ship is next to another ship.");
                } else if (
                  direction === "y" &&
                  board[yCoord + j][xCoord + k + i] !== undefined &&
                  typeof board[yCoord + j + i][xCoord + k] === "object"
                ) {
                  throw new Error("Ship is next to another ship.");
                }
              }
            }
          }
        }
        // If gotten this far, ship should be good to place.
        const ship = shipCreator(xCoord, yCoord, shipSize, direction);
        for (let i = 0; i < shipSize; i += 1) {
          if (direction === "x") {
            board[yCoord][xCoord + i] = ship;
          } else {
            board[yCoord + i][xCoord] = ship;
          }
        }
        return ship;
      }
    },
    // undefined = not hit, "o" = miss, "x" = hit, "a" = adjacent to ship
    receiveAttack(xCoord, yCoord) {
      // This function should take in coordinates and mark the board accordingly
      // hitting an already hit part of the ship should pass the func without executing anything
      // This takes care of illegal clicks.
      // returns two bools as follows:
      // [validHit, hitShip]
      if (
        board[yCoord][xCoord] === "o" ||
        board[yCoord][xCoord] === "x" ||
        board[yCoord][xCoord] === "a"
      ) {
        return [false, false];
      }
      if (board[yCoord][xCoord] === undefined) {
        board[yCoord][xCoord] = "o";
        return [true, false];
      }
      if (typeof board[yCoord][xCoord] === "object") {
        board[yCoord][xCoord].hit();
        this.markHitAdjacents(xCoord, yCoord);
        if (board[yCoord][xCoord].isSunk === true) {
          // Mark all the adjacents for ship if it was sunk
          this.markAllAdjacents(
            board[yCoord][xCoord].xStart,
            board[yCoord][xCoord].yStart,
            board[yCoord][xCoord].length,
            board[yCoord][xCoord].direction,
          );
        }
        board[yCoord][xCoord] = "x";
        return [true, true];
      }
      return false; // should never get here. This is just to shut up eslint.
    },
    checkIfAllSunk() {
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          if (board[i][j] !== undefined && board[i][j].isSunk === false) {
            return false;
          }
        }
      }
      return true;
    },
    markHitAdjacents(xCoord, yCoord) {
      // This func takes care of marking the adjacent squares on a SINGLE hit.
      // There will be another func that marks all adjacents for a single ship.
      // It's required for longer ships when we want to mark adjacents for square that was not hit on the same turn as the ship sinks.
      for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
          if (
            yCoord + i >= 0 &&
            yCoord + i <= 9 &&
            xCoord + j >= 0 &&
            xCoord + j <= 9
          ) {
            if (
              board[yCoord + i][xCoord + j] === undefined ||
              board[yCoord + i][xCoord + j] === "o"
            ) {
              if (
                board[yCoord][xCoord].isSunk === false &&
                i ** 2 !== 0 &&
                j ** 2 !== 0
              ) {
                board[yCoord + i][xCoord + j] = "a";
              } else if (board[yCoord][xCoord].isSunk === true) {
                board[yCoord + i][xCoord + j] = "a";
              }
            }
          }
        }
      }
    },
    markAllAdjacents(xCoord, yCoord, length, direction) {
      // Marks all the adjacent squares of a ship that was sunk.
      // This is required for ships that are longer than 1.
      for (let i = 0; i < length; i += 1) {
        if (direction === "x") {
          for (let j = -1; j <= 1; j += 1) {
            for (let k = -1; k <= 1; k += 1) {
              if (
                yCoord + j >= 0 &&
                yCoord + j <= 9 &&
                xCoord + k + i >= 0 &&
                xCoord + k + i <= 9
              ) {
                if (
                  board[yCoord + j][xCoord + k + i] === undefined ||
                  board[yCoord + j][xCoord + k + i] === "o"
                ) {
                  board[yCoord + j][xCoord + k + i] = "a";
                }
              }
            }
          }
        } else {
          for (let j = -1; j <= 1; j += 1) {
            for (let k = -1; k <= 1; k += 1) {
              if (
                yCoord + j + i >= 0 &&
                yCoord + j + i <= 9 &&
                xCoord + k >= 0 &&
                xCoord + k <= 9
              ) {
                if (
                  board[yCoord + j + i][xCoord + k] === undefined ||
                  board[yCoord + j + i][xCoord + k] === "o"
                ) {
                  board[yCoord + j + i][xCoord + k] = "a";
                }
              }
            }
          }
        }
      }
    },
  };
}

function playerCreator(type = "CPU") {
  // type is either "CPU" or "human". Let's just use CPU for default. don't know lol
  return {
    type,
    currentTurn: false,
    gameBoard: gameBoardCreator(),
    toggleTurn() {
      this.currentTurn = !this.currentTurn;
    },
  };
}

function CPUAttack() {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  return [x, y];
}

module.exports = {
  shipCreator,
  gameBoardCreator,
  playerCreator,
  CPUAttack,
};
