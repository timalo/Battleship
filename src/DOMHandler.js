// const main = require("./main");
const script = require("./scripts");

function renderBoards(player1, player2) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const box1 = document.getElementById(`box1-${i}${j}`);
      const box2 = document.getElementById(`box2-${i}${j}`);
      box1.innerHTML = "";
      box2.innerHTML = "";
      box1.classList.remove("playerUnhit", "missed", "hit", "adjacent");
      box2.classList.remove("unhit", "missed", "hit", "adjacent");
      if (player1.gameBoard.board[i][j] === undefined) {
        box1.classList.add("PlayerUnhit");
      } else if (typeof player1.gameBoard.board[i][j] === "object") {
        box1.classList.add("visible");
      } else if (player1.gameBoard.board[i][j] === "a") {
        // box1.innerHTML = "a";
        box1.classList.add("adjacent");
      } else if (player1.gameBoard.board[i][j] === "o") {
        // box1.innerHTML = "o";
        box1.classList.add("missed");
      } else if (player1.gameBoard.board[i][j] === "x") {
        // box1.innerHTML = "x";
        box1.classList.add("hit");
      }
      if (
        player2.gameBoard.board[i][j] === undefined ||
        typeof player2.gameBoard.board[i][j] === "object"
      ) {
        box2.classList.add("unhit");
      } else if (player2.gameBoard.board[i][j] === "a") {
        // box2.innerHTML = "a";
        box2.classList.add("adjacent");
      } else if (player2.gameBoard.board[i][j] === "o") {
        // box2.innerHTML = "o";
        box2.classList.add("missed");
      } else if (player2.gameBoard.board[i][j] === "x") {
        // box2.innerHTML = "x";
        box2.classList.add("hit");
      }
    }
  }
  // Update ships left text
  const shipsLeftPlayer = document.getElementsByClassName("shipsLeftPlayer")[0];
  const shipsLeftEnemy = document.getElementsByClassName("shipsLeftEnemy")[0];
  shipsLeftPlayer.innerHTML = `Ships left: ${player1.gameBoard.shipsleft}`;
  shipsLeftEnemy.innerHTML = `Ships left: ${player2.gameBoard.shipsleft}`;
}

function init(player1, player2) {
  const gameBoard1 = document.getElementsByClassName("board1")[0];
  const gameBoard2 = document.getElementsByClassName("board2")[0];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const box1 = document.createElement("div");
      box1.classList.add("box");
      box1.classList.add("playerUnhit");
      box1.id = `box1-${i}${j}`;
      // box1.addEventListener("click", () => hitShip(1, j, i, player1, player2));
      // hehe, this is not needed for the CPU. Would need if implementing 2-player mode.
      gameBoard1.appendChild(box1);
      const box2 = document.createElement("div");
      box2.classList.add("box");
      // box2.classList.add("unhit");
      box2.id = `box2-${i}${j}`;
      box2.addEventListener("click", () => hitShip(2, j, i, player1, player2));
      gameBoard2.appendChild(box2);
    }
  }
  player1.toggleTurn(); // init the game by giving the turn to p1
}

function hitShip(boardID, x, y, p1, p2) {
  // Disable shuffle button, enable newGameBtn and remove info text after first hit.
  const shuffleBtn = document.getElementsByClassName("shuffleButton")[0];
  shuffleBtn.disabled = true;
  const newGameBtn = document.getElementsByClassName("newGameButton")[0];
  newGameBtn.disabled = false;
  const playerInfo = document.getElementsByClassName("playerInfo")[0];
  playerInfo.innerHTML = "";
  console.log(`hit ${x}, ${y} on board ${boardID}`);
  if (boardID === 2 && p1.currentTurn === true) {
    const hitValidity = p2.gameBoard.receiveAttack(x, y);
    console.log(hitValidity);
    if (hitValidity[0] === false) {
      playerInfo.innerHTML = "You can't attack there!";
      console.log("illegal move.");
    } else if (hitValidity[0] === true && hitValidity[1] === false) {
      // console.log("miss! Toggling turn to CPU...");
      p1.toggleTurn();
      p2.toggleTurn();
      const attackCoords = script.CPUAttack();
      console.log(`CPU attacks ${attackCoords[0]}, ${attackCoords[1]}`);
      hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
      playerInfo.innerHTML = "You missed!";
    } else if (hitValidity[0] === true && hitValidity[1] === true) {
      // console.log("hit! Turn continues.");
      playerInfo.innerHTML = "You hit an enemy ship! Make another shot.";
      const isGameOver = p2.gameBoard.checkIfAllSunk();
      console.log("isGameOver: ", isGameOver);
      if (isGameOver) {
        gameOver(1); // player win
      }
    }
  } else if (boardID === 2) {
    console.log("Not your turn!");
  } else if (p2.currentTurn === true) {
    const hitValidity = p1.gameBoard.receiveAttack(x, y);
    if (hitValidity[0] === false) {
      // console.log("illegal move from CPU. Trying another one...");
      const attackCoords = script.CPUAttack();
      hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
    } else if (hitValidity[1] === false) {
      // console.log("miss! Toggling turn back to player");
      p1.toggleTurn();
      p2.toggleTurn();
    } else if (hitValidity[0] === true && hitValidity[1] === true) {
      // console.log("hit! CPU turn continues.");
      const isGameOver = p1.gameBoard.checkIfAllSunk();
      if (isGameOver) {
        gameOver(2); // CPU win
      } else {
        const attackCoords = script.CPUAttack();
        hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
      }
    }
  }
  renderBoards(p1, p2);
}

function gameOver(playerID) {
  console.log(`Player ${playerID} wins!`);
  const playerInfo = document.getElementsByClassName("playerInfo")[0];
  playerInfo.innerHTML = `Player ${playerID} wins!`;
  disableUI(); // Make clicking the boards impossible after the game.
}

function disableUI() {
  console.log("disabling UI...");
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].classList.add("disabled");
  }
}

function newGame() {
  console.log("Starting new game...");
  const shuffleBtn = document.getElementsByClassName("shuffleButton")[0];
  shuffleBtn.disabled = false;
  const player1 = script.playerCreator("human");
  const player2 = script.playerCreator();
  clearHTMLBoards();
  placeShips(player1);
  placeShips(player2);
  init(player1, player2);
  renderBoards(player1, player2);
  const newGameBtn = document.getElementsByClassName("newGameButton")[0];
  newGameBtn.disabled = true;
  const playerInfo = document.getElementsByClassName("playerInfo")[0];
  playerInfo.innerHTML =
    "You can start the game by attacking the enemy board, or shuffle your own ships with the shuffle button.";
}

function placeShips(player) {
  // call random placement function from here until all the ships are placed.
  const shipsLengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  while (shipsLengths.length > 0) {
    const validShip = placeRandomShip(
      player,
      shipsLengths[shipsLengths.length - 1],
    );
    if (validShip) {
      shipsLengths.pop();
    }
  }
}

function placeRandomShip(player, length) {
  // place a ship at a random location
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const direction = Math.random() < 0.5 ? "x" : "y";
  try {
    player.gameBoard.placeShip(length, x, y, direction);
    // console.log("Placed ship of length ", length, "at ", x, y, direction);
    return true;
  } catch (e) {
    // console.log(e);
    return false;
  }
}

function clearHTMLBoards() {
  const board1 = document.getElementsByClassName("board1")[0];
  const board2 = document.getElementsByClassName("board2")[0];
  board1.innerHTML = "";
  board2.innerHTML = "";
}

module.exports = { renderBoards, init, newGame, placeShips, clearHTMLBoards };
