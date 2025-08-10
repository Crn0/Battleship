import { shipBluePrints } from "./data/blueprints.ts";
import { createGameBoard } from "../board/board.ts";
import { createPlayer } from "./player.ts";
import { isValidDirection } from "../lib/is-valid-direciton.ts";

const board1 = createGameBoard();
const board2 = createGameBoard();

const player1 = createPlayer({
  name: "player_one",
  board: board1,
  enemyBoard: board2,
  blueprints: shipBluePrints,
});

const player2 = createPlayer({
  name: "player_two",
  board: board2,
  enemyBoard: board1,
  blueprints: shipBluePrints,
});

const shipPositions: {
  [key: string]: {
    [key: string]: { row: number; col: number; dir: "horizontal" | "vertical" };
  };
} = {
  playerOne: {
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
  },
} as const;

describe("Create player", () => {
  test("check player names", () => {
    expect(player1.name).toMatch("player_one");
    expect(player2.name).toMatch("player_two");
  });

  test("check if ships have been created", () => {
    expect(player1.board.dock).toHaveLength(5);
    expect(player2.board.dock).toHaveLength(5);
  });
});

describe("Ship placement", () => {
  test("placed ship should return true", () => {
    player1.board.dock.map((ship) => {
      const position = shipPositions.playerOne?.[ship.name];

      if (!position) return;

      expect(
        player1.board.placeShip(ship, position.row, position.col, position.dir),
      ).toBe(true);
    });

    expect(player1.board.dock).toHaveLength(0);
    expect(player1.board.deployedShips).toHaveLength(shipBluePrints.length);
  });

  test("randomly placing ships", () => {
    player2.autoPlaceShips();

    expect(player2.board.dock).toHaveLength(0);
    expect(player2.board.deployedShips).toHaveLength(shipBluePrints.length);
  });

  test("taken coordinates should return false", () => {
    player1.board.dock.map((ship) => {
      const position = shipPositions.playerOne?.[ship.name];

      if (!position) return;

      const { row, col, dir } = position;

      if (
        typeof row !== "number" ||
        typeof col !== "number" ||
        !isValidDirection(dir ?? "")
      )
        return;

      expect(player1.board.placeShip(ship, row, col, dir)).toBe(false);
    });
  });
});

describe("Player attacks", () => {
  test("manually attacking a player", () => {
    const { row, col } = shipPositions?.playerOne?.cruiser!;

    expect(player2.atkEnemy(row, col)).toBe("hit");
  });

  test("automatically attacking a player", () => {
    const spy = jest.spyOn(player2.board, "receivedAtk");

    player1.autoAtk();

    expect(spy).toHaveBeenCalled();
  });
});
