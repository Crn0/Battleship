import { createGameBoard } from "./board";

const gameBoard = createGameBoard();

const blueprints = [
  { name: "carrier", length: 5 },
  { name: "battleship", length: 4 },
  { name: "cruiser", length: 3 },
  { name: "submarine", length: 3 },
  { name: "destroyer", length: 2 },
];

gameBoard.initShips(blueprints);

describe("ship creation", () => {
  test("check if the ships have been created", () => {
    gameBoard.dock.forEach((ship) => {
      expect(ship).toHaveProperty("name");
      expect(ship).toHaveProperty("length");
      expect(ship).toHaveProperty("hit");
      expect(ship).toHaveProperty("resetHealth");
      expect(ship).toHaveProperty("isSunk");
    });
  });
});

describe("place ships", () => {
  const shipPositions: {
    [key: string]: {
      row: number;
      col: number;
      dir: "horizontal" | "vertical";
    };
  } = {
    carrier: {
      row: 0,
      col: 0,
      dir: "horizontal",
    },
    battleship: {
      row: 1,
      col: 0,
      dir: "vertical",
    },
    cruiser: {
      row: 8,
      col: 0,
      dir: "horizontal",
    },
    submarine: {
      row: 7,
      col: 0,
      dir: "horizontal",
    },
    destroyer: {
      row: 6,
      col: 0,
      dir: "horizontal",
    },
  };

  test("placed ship should return true", () => {
    gameBoard.dock.map((ship) => {
      const position = shipPositions[ship.name];
      expect(
        gameBoard.placeShip(ship, position!.row, position!.col, position!.dir),
      ).toBe(true);
    });
  });

  test("taken coordinates should return false", () => {
    gameBoard.dock.map((ship) => {
      const position = shipPositions[ship.name];
      expect(
        gameBoard.placeShip(ship, position!.row, position!.col, position!.dir),
      ).toBe(false);
    });
  });
});

describe("receive attack", () => {
  test("if the attack hit the ship return true", () => {
    expect(gameBoard.receivedAtk(0, 0)).toBe("hit");
    expect(gameBoard.receivedAtk(0, 1)).toBe("hit");
    expect(gameBoard.receivedAtk(0, 2)).toBe("hit");
    expect(gameBoard.receivedAtk(0, 3)).toBe("hit");
  });

  test("if the attack missed return false", () => {
    expect(gameBoard.receivedAtk(9, 9)).toBe("miss");
  });
});

// ship is all sunk

describe("all ships sunk", () => {
  const attack = jest.fn(() => {
    // carrier
    gameBoard.receivedAtk(0, 0);
    gameBoard.receivedAtk(0, 1);
    gameBoard.receivedAtk(0, 2);
    gameBoard.receivedAtk(0, 3);
    gameBoard.receivedAtk(0, 4);
    // battleship
    gameBoard.receivedAtk(1, 0);
    gameBoard.receivedAtk(2, 0);
    gameBoard.receivedAtk(3, 0);
    gameBoard.receivedAtk(4, 0);
    // cruiser
    gameBoard.receivedAtk(8, 0);
    gameBoard.receivedAtk(8, 1);
    gameBoard.receivedAtk(8, 2);
    // submarine
    gameBoard.receivedAtk(7, 0);
    gameBoard.receivedAtk(7, 1);
    gameBoard.receivedAtk(7, 2);
    // destroyer
    gameBoard.receivedAtk(6, 0);
    gameBoard.receivedAtk(6, 1);
  });

  test("all ships not sunk return false", () => {
    expect(gameBoard.allShipsSunk()).toBe(false);
  });

  test("all ships sunk return true", () => {
    attack();
    expect(gameBoard.allShipsSunk()).toBe(true);
  });
});
