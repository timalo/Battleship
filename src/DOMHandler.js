// const script = require("./scripts");
const main = require("./main");

function init() {
  // This initializes the gameboard boxes and gives them classes and id's on page load.
  const gameBoard1 = document.getElementsByClassName("board1")[0];
  const gameBoard2 = document.getElementsByClassName("board2")[0];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const box1 = document.createElement("div");
      box1.classList.add("box");
      box1.classList.add("unhit");
      box1.id = `box1-${i}${j}`;
      box1.onclick = () => main.hitShip(1, i, j);
      gameBoard1.appendChild(box1);
      const box2 = document.createElement("div");
      box2.classList.add("box");
      box2.classList.add("unhit");
      box2.id = `box2-${i}${j}`;
      box2.onclick = () => main.hitShip(2, i, j);
      gameBoard2.appendChild(box2);
    }
  }
}

function renderBoards(player1, player2) {
  // In addition to handling classes etc. We could also add images to hit/missed boxes.
  // Doing it with just background colors for now
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const box1 = document.getElementById(`box1-${i}${j}`);
      const box2 = document.getElementById(`box2-${i}${j}`);
      box1.innerHTML = "";
      box2.innerHTML = "";
      box1.classList.remove("unhit", "missed", "hit", "adjacent");
      box2.classList.remove("unhit", "missed", "hit", "adjacent");
      if (
        player1.gameBoard.board[i][j] === undefined ||
        typeof player1.gameBoard.board[i][j] === "object"
      ) {
        box1.classList.add("unhit");
      } else if (player1.gameBoard.board[i][j] === "a") {
        box1.innerHTML = "a";
        box1.classList.add("adjacent");
      } else if (player1.gameBoard.board[i][j] === "o") {
        box1.innerHTML = "o";
        box1.classList.add("missed");
      } else if (player1.gameBoard.board[i][j] === "x") {
        box1.innerHTML = "x";
        box1.classList.add("hit");
      }
      if (
        player2.gameBoard.board[i][j] === undefined ||
        typeof player2.gameBoard.board[i][j] === "object"
      ) {
        box2.classList.add("unhit");
      } else if (player2.gameBoard.board[i][j] === "a") {
        box2.innerHTML = "a";
        box2.classList.add("adjacent");
      } else if (player2.gameBoard.board[i][j] === "o") {
        box2.innerHTML = "o";
        box2.classList.add("missed");
      } else if (player2.gameBoard.board[i][j] === "x") {
        box2.innerHTML = "x";
        box2.classList.add("hit");
      }
    }
  }
}

module.exports = { init, renderBoards }; // eslint complains about this when exporting just one function. There are more funcs coming
