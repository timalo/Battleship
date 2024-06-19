const script = require("./scripts");

test("shipCreator returns an object", () => {
  expect(typeof script.shipCreator(4)).toBe("object");
});

test("ship sinks after number of hits equal to length", () => {
  const ship = script.shipCreator(4);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk).toBe(true);
});

test("created GameBoard object is of correct size", () => {
  const gameBoard = script.gameBoardCreator();
  expect(gameBoard.board.length).toBe(10);
  expect(gameBoard.board[0].length).toBe(10);
});

test("placeShip places ship on board in horizontal direction", () => {
  const gameBoard = script.gameBoardCreator();
  const ship = gameBoard.placeShip(4, 0, 0, "x");
  expect(gameBoard.board[0][0]).toEqual(ship);
  expect(gameBoard.board[0][1]).toEqual(ship);
  expect(gameBoard.board[0][2]).toEqual(ship);
  expect(gameBoard.board[0][3]).toEqual(ship);
});

test("placeShip places ship on board in vertical direction", () => {
  const gameBoard = script.gameBoardCreator();
  const ship = gameBoard.placeShip(4, 5, 4, "y");
  expect(gameBoard.board[4][5]).toEqual(ship);
  expect(gameBoard.board[5][5]).toEqual(ship);
  expect(gameBoard.board[6][5]).toEqual(ship);
  expect(gameBoard.board[7][5]).toEqual(ship);
});

test("placeShip throws error if ship out of bounds", () => {
  const gameBoard = script.gameBoardCreator();
  expect(() => gameBoard.placeShip(4, 7, 7, "x")).toThrow("Ship out of bounds");
});

test("receiveAttack hits ships correctly and reduces HP", () => {
  const gameBoard = script.gameBoardCreator();
  const ship = gameBoard.placeShip(4, 0, 0, "x");
  gameBoard.receiveAttack(0, 0);
  expect(ship.hp).toBe(3);
  gameBoard.receiveAttack(0, 0);
  expect(ship.hp).toBe(3);
  gameBoard.receiveAttack(1, 0);
  expect(ship.hp).toBe(2);
});

test("receiveAttack marks misses correctly", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.receiveAttack(0, 0);
  expect(gameBoard.board[0][0]).toBe("o");
});

test("checkIfAllSunk returns false if not all ships are sunk", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(1, 0, 0, "x");
  gameBoard.receiveAttack(6, 5);
  expect(gameBoard.checkIfAllSunk()).toBe(false);
});

test("checkIfAllSunk returns true if all ships are sunk", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(1, 0, 0, "x");
  gameBoard.placeShip(4, 6, 5, "y");
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(6, 5);
  gameBoard.receiveAttack(6, 6);
  gameBoard.receiveAttack(6, 7);
  gameBoard.receiveAttack(6, 8);
  expect(gameBoard.checkIfAllSunk()).toBe(true);
});
