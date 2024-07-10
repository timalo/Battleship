import "./styles.css";

const DOMHandler = require("./DOMHandler");
const script = require("./scripts");

window.onload = () => {
  /*   const gameBoard1 = document.getElementsByClassName("board1")[0];
  const gameBoard2 = document.getElementsByClassName("board2")[0]; */
  const player1 = script.playerCreator("human");
  // just placing these manually for now. Will be done by the user later.
  player1.gameBoard.placeShip(4, 1, 4, "y"); // ends in 1, 8
  player1.gameBoard.placeShip(3, 7, 2, "x"); // 9, 2
  player1.gameBoard.placeShip(3, 3, 1, "y"); // 3, 3
  player1.gameBoard.placeShip(2, 4, 5, "x"); // 5, 5
  player1.gameBoard.placeShip(2, 6, 8, "x"); // 7, 8
  player1.gameBoard.placeShip(2, 1, 9, "x"); // 2, 9
  player1.gameBoard.placeShip(1, 4, 7, "x");
  player1.gameBoard.placeShip(1, 9, 8, "y");
  player1.gameBoard.placeShip(1, 0, 0, "x");
  player1.gameBoard.placeShip(1, 0, 2, "x");

  const player2 = script.playerCreator();
  player2.gameBoard.placeShip(4, 1, 4, "y"); // ends in 1, 8
  player2.gameBoard.placeShip(3, 7, 2, "x"); // 9, 2
  player2.gameBoard.placeShip(3, 3, 1, "y"); // 3, 3
  player2.gameBoard.placeShip(2, 4, 5, "x"); // 5, 5
  player2.gameBoard.placeShip(2, 6, 8, "x"); // 7, 8
  player2.gameBoard.placeShip(2, 1, 9, "x"); // 2, 9
  player2.gameBoard.placeShip(1, 4, 7, "x");
  player2.gameBoard.placeShip(1, 9, 8, "y");
  player2.gameBoard.placeShip(1, 0, 0, "x");
  player2.gameBoard.placeShip(1, 0, 2, "x");
  init(player1, player2);
  DOMHandler.renderBoards(player1, player2);
};

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

// TODO: This should maybe be in a separate file?
function hitShip(boardID, x, y, p1, p2) {
  console.log(`hit ${x}, ${y} on board ${boardID}`);
  if (boardID === 2 && p1.currentTurn === true) {
    const hitValidity = p2.gameBoard.receiveAttack(x, y);
    console.log(hitValidity);
    if (hitValidity[0] === false) {
      console.log("illegal move.");
    } else if (hitValidity[0] === true && hitValidity[1] === false) {
      console.log("miss! Toggling turn to CPU...");
      p1.toggleTurn();
      p2.toggleTurn();
      const attackCoords = script.CPUAttack();
      console.log(`CPU attacks ${attackCoords[0]}, ${attackCoords[1]}`);
      hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
    } else if (hitValidity[0] === true && hitValidity[1] === true) {
      console.log("hit! Turn continues.");
    }
  } else if (boardID === 2) {
    console.log("Not your turn!");
  } else if (p2.currentTurn === true) {
    const hitValidity = p1.gameBoard.receiveAttack(x, y);
    console.log(hitValidity);
    if (hitValidity[0] === false) {
      console.log("illegal move from CPU. Just try another one.");
      const attackCoords = script.CPUAttack();
      hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
    }
    if (hitValidity[1] === false) {
      console.log("miss! Toggling turn back to player");
      p1.toggleTurn();
      p2.toggleTurn();
    } else if (hitValidity[0] === true && hitValidity[1] === true) {
      console.log("hit! CPU turn continues.");
      const attackCoords = script.CPUAttack();
      hitShip(1, attackCoords[0], attackCoords[1], p1, p2);
    }
  }

  DOMHandler.renderBoards(p1, p2);
}
