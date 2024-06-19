function shipCreator(length) {
  return {
    length,
    hp: length,
    isSunk: false,
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
    .fill(null)
    .map(() => Array(10).fill(null));
  return {
    board,
    placeShip(shipSize, xCoord, yCoord, direction) {
      // call shipCreator here to create a ship,
      // direction is either "x" or "y"
      if (
        (direction === "x" && xCoord + shipSize > 10) ||
        (direction === "y" && yCoord + shipSize > 10)
        // This takes care of the ship staying in bounds.
      ) {
        throw new Error("Ship out of bounds");
      } else {
        const ship = shipCreator(shipSize);
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
    // null = not hit, "o" = miss, "x" = hit
    receiveAttack(xCoord, yCoord) {
      // This function should take in coordinates and mark the board accordingly
      // hitting an already hit part of the ship practically passes the entire function without executing anything
      // This shouldn't be called with the same coordinates twice
      if (board[yCoord][xCoord] === null || board[yCoord][xCoord] === "o") {
        board[yCoord][xCoord] = "o";
      } else if (board[yCoord][xCoord] !== "x") {
        board[yCoord][xCoord].hit();
        board[yCoord][xCoord] = "x";
        this.checkIfAllSunk();
      }
    },
    checkIfAllSunk() {
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          if (
            board[i][j] !== null &&
            board[i][j] !== "o" &&
            board[i][j].isSunk === false
          ) {
            return false;
          }
        }
      }
      return true;
    },
  };
}

function playerCreator(type = "CPU") {
  return {
    type,
    gameBoard: gameBoardCreator(),
  };
}

module.exports = { shipCreator, gameBoardCreator, playerCreator };
