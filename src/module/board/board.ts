import type { GetReturnType } from "../../types/index";
import { createShip, type IShip } from "../ship/ship";
import { validPosition } from "../lib/index";
import { createBoard, ensureRow } from "./utils/index";

export type TAttackedCoords = (number | null)[][];

export type TVirtualOcean = [number, number][][];

export type TOcean = (IShip | null)[][];

export type TDirection = "horizontal" | "vertical";

export type TDock = IShip[];

export type TAtkRes = "hit" | "miss" | "already";

export interface IGameBoard {
  readonly ocean: TOcean;
  readonly virtualOcean: TVirtualOcean;
  readonly attackedCoords: TAttackedCoords;
  readonly dock: TDock;
  readonly deployedShips: TDock;
  initShips(blueprints: Readonly<{ name: string; length: number }[]>): void;
  placeShip(ship: IShip, row: number, col: number, dir: TDirection): boolean;
  receivedAtk(row: number, col: number): TAtkRes;
  allShipsSunk(): boolean;
}

const BOARD_LEN = 10;

class GameBoard implements IGameBoard {
  private _ocean: TOcean;
  private _virtualOcean: TVirtualOcean;
  private _attackedCoords: TAttackedCoords;
  private _dock: TDock;
  private _deployedShips: TDock;

  constructor() {
    this._ocean = createBoard(BOARD_LEN, () => null);
    this._virtualOcean = createBoard(BOARD_LEN, (row, col) => [row, col]);
    this._attackedCoords = createBoard(BOARD_LEN, () => null);
    this._dock = [];
    this._deployedShips = [];
  }

  public initShips = (
    blueprints: Readonly<{ name: string; length: number }[]>,
  ) => {
    blueprints.forEach(({ name, length }) => {
      if (this._dock.find((s) => s.name === name && s.length === length)) {
        throw Error(
          `You can only have a one type of ${name} with length of ${length}`,
        );
      }

      this._dock.push(createShip({ name, length }));
    });
  };

  public placeShip = (
    ship: IShip,
    row: number,
    col: number,
    dir: TDirection,
  ) => {
    if (!validPosition(ship, row, col, dir, this._ocean)) return false;

    for (let i = 0; i < ship.length; i += 1) {
      const [r, c] = dir === "horizontal" ? [row, col + i] : [row + i, col];

      ensureRow(this._ocean, r)[c] = ship;

      ship.positions = { row: r, col: c };
    }

    this._dock = this._dock.filter(
      (s) => !(s.name === ship.name && s.length === ship.length),
    );

    if (!this._deployedShips.includes(ship)) {
      this._deployedShips.push(ship);
    }

    return true;
  };

  public receivedAtk = (row: number, col: number) => {
    const MISS = 0;
    const HIT = 1;

    if (this._attackedCoords[row]?.[col] !== null) return "already";

    const currentShip = this._ocean[row]?.[col];

    if (!currentShip?.isShip()) {
      ensureRow(this._attackedCoords, row)[col] = MISS;

      return "miss";
    }

    currentShip.hit();

    ensureRow(this._attackedCoords, row)[col] = HIT;

    return "hit";
  };

  public allShipsSunk = () =>
    this._deployedShips
      .map((ship) => ship.isSunk())
      .every((hasSunk) => hasSunk === true);

  public get ocean() {
    return this._ocean;
  }

  public get virtualOcean() {
    return this._virtualOcean;
  }

  public get dock() {
    return this._dock;
  }
  public get deployedShips() {
    return this._deployedShips;
  }

  public get attackedCoords() {
    return this._attackedCoords;
  }
}

export const createGameBoard = () => new GameBoard();

const t: TOcean = createBoard(BOARD_LEN, () =>
  Math.random() > 0.5 ? null : createShip({ name: "cruiser", length: 5 }),
);
