import {
  type TDirection,
  type IGameBoard,
  type TAtkRes,
} from "../board/board.ts";
import type { IShip } from "../ship/ship.ts";

import { shuffleArray } from "../lib/shuffle-array.ts";
import { validPosition } from "../lib/valid-position.ts";

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

// export default function Player(
//   name: string,
//   board: TGameBoard,
//   enemyBoard: TGameBoard,
//   isComputer = false,
// ) {
//   const playerName = !isComputer ? name : "Computer";

// const validCoords = enemyBoard.virtualOcean.flatMap((v) => v.map((v) => v));

//   const { dock } = board;

//   const initShips = () => {
//     board.initShips(shipBluePrints);
//   };

//   const placeShip = (
//     isRandom: boolean,
//     DTO?: { ship: TShip; row: number; col: number; dir: TDirection },
//   ) => {
//     if (isRandom || !DTO) {
// const queue = [...dock];

// while (queue.length !== 0) {
//   const currentShip = queue[0];

//   if (!isShip(currentShip)) return false;

//   const randomRow = Math.floor(Math.random() * 9);
//   const randomCol = Math.floor(Math.random() * 9);

//   const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

//         if (
//           validPosition(
//             currentShip,
//             randomRow,
//             randomCol,
//             direction,
//             enemyBoard.ocean,
//           )
//         ) {
//           board.placeShip(currentShip, randomRow, randomCol, direction);

//           queue.shift();
//         }
//       }

//       return true;
//     }

//     return board.placeShip(DTO.ship, DTO.row, DTO.col, DTO.dir);
//   };

//   const atkEnemy = (row: number, col: number) => {
//     if (
//       row &&
//       col &&
//       !Number.isNaN(Number(enemyBoard.attackedCoords?.[row]?.[col]))
//     )
//       return false;

//     if (isComputer) {
//   const availableIndex = validCoords.filter(
//     ([row, col]) => enemyBoard.attackedCoords?.[row]?.[col] !== null,
//   );

//   const coords =
//     availableIndex[Math.floor(Math.random() * availableIndex.length)];

//   if (!coords) return false;

//   enemyBoard.receivedAtk(coords[0], coords[1]);
//   return true;
// }

// enemyBoard.receivedAtk(row, col);
//     return true;
//   };

//   return Object.freeze({
//     isComputer() {
//       return isComputer;
//     },
//     getName() {
//       return playerName;
//     },
//     getOcean() {
//       return board.ocean;
//     },
//     getDock() {
//       return dock;
//     },
//     atkEnemy,
//     initShips,
//     placeShip,
//   });
// }
