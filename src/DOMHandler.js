// const main = require("./main");
const script = require("./scripts");

function renderBoards(player1, player2) {
  // In addition to handling classes etc. We could also add images to hit/missed boxes.
  // Doing it with just background colors for now
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

async function hitShip(boardID, x, y, p1, p2) {
  console.log(`hit ${x}, ${y} on board ${boardID}`);
  if (boardID === 2 && p1.currentTurn === true) {
    const hitValidity = p2.gameBoard.receiveAttack(x, y);
    console.log(hitValidity);
    if (hitValidity[0] === false) {
      console.log("illegal move.");
    } else if (hitValidity[0] === true && hitValidity[1] === false) {
      // console.log("miss! Toggling turn to CPU...");
      p1.toggleTurn();
      p2.toggleTurn();
      const attackCoords = script.CPUAttack();
      console.log(`CPU attacks ${attackCoords[0]}, ${attackCoords[1]}`);
      hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
    } else if (hitValidity[0] === true && hitValidity[1] === true) {
      // console.log("hit! Turn continues.");
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
      console.log("illegal move from CPU. Trying another one...");
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
      }
      const attackCoords = script.CPUAttack();
      hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
    }
  }

  renderBoards(p1, p2);
}

function gameOver(playerID) {
  console.log(`Player ${playerID} wins!`);
  disableUI(); // Make clicking the boards impossible after the game.
}

function disableUI() {
  console.log("disabling UI...");
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].classList.add("disabled");
  }
}

/* function newGame(p1, p2) {
  // Starts a new game. For now just use the premade ship positions.
  console.log("Starting new game...");
  const board1 = document.getElementsByClassName("board1")[0];
  const board2 = document.getElementsByClassName("board2")[0];
  board1.innerHTML = "";
  board2.innerHTML = "";
  init(p1, p2);
  renderBoards(p1, p2);
} */

module.exports = { renderBoards, init }; // eslint complains about this when exporting just one function. There are more funcs coming
