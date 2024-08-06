import "./styles.css";

const DOMHandler = require("./DOMHandler");
const script = require("./scripts");

window.onload = () => {
  const player1 = script.playerCreator("human");
  const player2 = script.playerCreator();
  DOMHandler.placeShips(player1);
  DOMHandler.placeShips(player2);
  DOMHandler.init(player1, player2);
  DOMHandler.renderBoards(player1, player2);

  const newGameBtn = document.getElementsByClassName("newGameButton")[0];
  newGameBtn.addEventListener("click", () => {
    DOMHandler.clearHTMLBoards();
    DOMHandler.newGame();
  });
  // Lol, apparently this works by giving both of these the same functionality.
  const shuffleBtn = document.getElementsByClassName("shuffleButton")[0];
  shuffleBtn.addEventListener("click", () => {
    console.log("clicked shuffle");
    DOMHandler.clearHTMLBoards();
    DOMHandler.newGame();
  });
};
