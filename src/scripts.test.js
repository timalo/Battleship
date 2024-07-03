const script = require("./scripts");

test("shipCreator returns an object", () => {
  expect(typeof script.shipCreator(5, 6, 4, "y")).toBe("object");
});

test("ship sinks after number of hits equal to length", () => {
  const ship = script.shipCreator(2, 2, 4, "y");
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

test("placeShip throws error if ship overlaps another ship", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(4, 5, 4, "y");
  expect(() => gameBoard.placeShip(4, 5, 4, "x")).toThrow(
    "Ship overlaps another ship.",
  );
});

test("placeShip throws error if ship is next to another ship", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(4, 5, 4, "y");
  expect(() => gameBoard.placeShip(4, 4, 3, "x")).toThrow(
    "Ship is next to another ship.",
  );
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

test("adjacents marked correctly on a ship with a size of 1 in the middle of the board", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(1, 3, 3, "x");
  gameBoard.receiveAttack(3, 3);
  expect(gameBoard.board[2][2]).toBe("a");
  expect(gameBoard.board[2][3]).toBe("a");
  expect(gameBoard.board[2][4]).toBe("a");
  expect(gameBoard.board[3][2]).toBe("a");
  expect(gameBoard.board[3][4]).toBe("a");
  expect(gameBoard.board[4][2]).toBe("a");
  expect(gameBoard.board[4][3]).toBe("a");
  expect(gameBoard.board[4][4]).toBe("a");
});

test("Adjacents marked correctly on a ship with a size of 1 on the top left corner", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(1, 0, 0, "x");
  gameBoard.receiveAttack(0, 0);
  expect(gameBoard.board[0][1]).toBe("a");
  expect(gameBoard.board[1][0]).toBe("a");
  expect(gameBoard.board[1][1]).toBe("a");
});

test("Adjacents marked correctly on a ship with a size of 2 in the middle", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(2, 3, 1, "y");
  gameBoard.receiveAttack(3, 1);
  expect(gameBoard.board[0][2]).toBe("a");
  expect(gameBoard.board[0][4]).toBe("a");
  expect(gameBoard.board[2][2]).toBe("a");
  expect(gameBoard.board[2][4]).toBe("a");
  expect(gameBoard.board[0][3]).toBe(undefined);
  expect(gameBoard.board[1][2]).toBe(undefined);
  expect(gameBoard.board[1][4]).toBe(undefined);
});

test("Destroying a middle part of a ship last", () => {
  const gameBoard = script.gameBoardCreator();
  gameBoard.placeShip(2, 5, 5, "x");
  gameBoard.placeShip(4, 2, 3, "y");
  gameBoard.receiveAttack(2, 3);
  expect(gameBoard.board[2][1]).toBe("a");
  expect(gameBoard.board[2][3]).toBe("a");
  expect(gameBoard.board[3][2]).toBe("x");
  expect(gameBoard.board[4][1]).toBe("a");
  expect(gameBoard.board[4][3]).toBe("a");
  gameBoard.receiveAttack(2, 6);
  expect(gameBoard.board[5][1]).toBe("a");
  expect(gameBoard.board[5][3]).toBe("a");
  expect(gameBoard.board[7][1]).toBe("a");
  expect(gameBoard.board[7][3]).toBe("a");
  expect(gameBoard.board[6][2]).toBe("x");
  gameBoard.receiveAttack(2, 5);
  expect(gameBoard.board[5][2]).toBe("x");
  expect(gameBoard.board[6][5]).toBe(undefined);
  expect(gameBoard.board[4][1]).toBe("a");
  expect(gameBoard.board[4][3]).toBe("a");
  expect(gameBoard.board[6][1]).toBe("a");
  expect(gameBoard.board[6][3]).toBe("a");
  gameBoard.receiveAttack(2, 4);
  expect(gameBoard.board[4][2]).toBe("x");
  expect(gameBoard.board[2][1]).toBe("a");
  expect(gameBoard.board[2][2]).toBe("a");
  expect(gameBoard.board[2][3]).toBe("a");
  expect(gameBoard.board[3][1]).toBe("a");
  expect(gameBoard.board[3][3]).toBe("a");
  expect(gameBoard.board[4][1]).toBe("a");
  expect(gameBoard.board[4][3]).toBe("a");
  expect(gameBoard.board[5][1]).toBe("a");
  expect(gameBoard.board[5][3]).toBe("a");
  expect(gameBoard.board[6][1]).toBe("a");
  expect(gameBoard.board[6][3]).toBe("a");
  expect(gameBoard.board[7][1]).toBe("a");
  expect(gameBoard.board[7][2]).toBe("a");
  expect(gameBoard.board[7][3]).toBe("a");
});
