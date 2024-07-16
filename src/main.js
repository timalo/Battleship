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
  DOMHandler.init(player1, player2);
  DOMHandler.renderBoards(player1, player2);

  /*   const newGameBtn = document.getElementsByClassName("newGameButton")[0];
  newGameBtn.addEventListener("click", () => {
    DOMHandler.newGame(player1, player2);
  }); */
};
