import "./styles.css";

const DOMHandler = require("./DOMHandler");
const script = require("./scripts");

window.onload = () => {
  /*   const gameBoard1 = document.getElementsByClassName("board1")[0];
  const gameBoard2 = document.getElementsByClassName("board2")[0]; */
  const player1 = script.playerCreator("human");
  const player2 = script.playerCreator();
  DOMHandler.placeShips(player1, player2);
  DOMHandler.init(player1, player2);
  DOMHandler.renderBoards(player1, player2);

  const newGameBtn = document.getElementsByClassName("newGameButton")[0];
  newGameBtn.addEventListener("click", () => {
    DOMHandler.newGame();
  });
};
