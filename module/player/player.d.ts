import { type TDirection, type IGameBoard, type TAtkRes } from "../board/board";
import type { IShip } from "../ship/ship";
export type TPlaceShip = {
    DTO?: {
        ship: IShip;
        row: number;
        col: number;
        dir: TDirection;
    };
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
    blueprints: Readonly<{
        name: string;
        length: number;
    }[]>;
}
declare class Player implements IPlayer {
    private _id;
    private _name;
    private _board;
    private _enemyBoard;
    private _validCoords;
    /**
     *
     */
    constructor(DTO: PlayerDTO);
    atkEnemy(row: number, col: number): TAtkRes;
    autoPlaceShips(): false | undefined;
    autoAtk(): TAtkRes;
    get id(): string;
    get name(): string;
    get board(): IGameBoard;
}
export declare const createPlayer: (DTO: PlayerDTO) => Player;
export {};
//# sourceMappingURL=player.d.ts.map