import { type TDirection, type IGameBoard, type TAtkRes } from "../board/board";
import type { IShip } from "../ship/ship";

import { shuffleArray } from "../lib/shuffle-array";
import { validPosition } from "../lib/valid-position";

export type TPlaceShip = {
  DTO?: { ship: IShip; row: number; col: number; dir: TDirection };
};

export interface IPlayer {
  id: string;
  name: string;
  board: IGameBoard;
  atkEnemy(row: number, col: number): TAtkRes;
  autoPlaceShips(): void;
  autoAtk(): TAtkRes;
}

export interface PlayerDTO {
  name: string;
  board: IGameBoard;
  enemyBoard: IGameBoard;
  blueprints: Readonly<{ name: string; length: number }[]>;
}

class Player implements IPlayer {
  private _id: string;
  private _name: string;
  private _board: IGameBoard;
  private _enemyBoard: IGameBoard;
  private _validCoords: [number, number][];

  /**
   *
   */
  constructor(DTO: PlayerDTO) {
    this._id = crypto.randomUUID();
    this._name = DTO.name;
    this._board = DTO.board;
    this._enemyBoard = DTO.enemyBoard;
    this._board.initShips(DTO.blueprints);
    this._validCoords = DTO.enemyBoard.virtualOcean.flatMap((v) =>
      v.map((v) => v),
    );
  }

  public atkEnemy(row: number, col: number) {
    return this._enemyBoard.receivedAtk(row, col);
  }

  public autoPlaceShips() {
    const queue = [...this._board.dock];

    while (queue.length !== 0) {
      const currentShip = queue[0];

      if (!currentShip?.isShip()) return false;

      const randomRow = Math.floor(Math.random() * 9);
      const randomCol = Math.floor(Math.random() * 9);

      const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

      if (
        validPosition(
          currentShip,
          randomRow,
          randomCol,
          direction,
          this.board.ocean,
        )
      ) {
        this._board.placeShip(currentShip, randomRow, randomCol, direction);

        queue.shift();
      }
    }
  }

  public autoAtk() {
    this._validCoords = shuffleArray(this._validCoords);

    if (!this._validCoords.length) return "already";

    const coords = this._validCoords.shift();

    if (!coords) return "miss";

    const [row, col] = coords;

    return this._enemyBoard.receivedAtk(row, col);
  }

  get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get board(): IGameBoard {
    return this._board;
  }
}

export const createPlayer = (DTO: PlayerDTO) => new Player(DTO);
