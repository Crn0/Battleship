import { type IShip } from "../ship/ship";
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
    initShips(blueprints: Readonly<{
        name: string;
        length: number;
    }[]>): void;
    placeShip(ship: IShip, row: number, col: number, dir: TDirection): boolean;
    receivedAtk(row: number, col: number): TAtkRes;
    allShipsSunk(): boolean;
}
declare class GameBoard implements IGameBoard {
    private _ocean;
    private _virtualOcean;
    private _attackedCoords;
    private _dock;
    private _deployedShips;
    constructor();
    initShips: (blueprints: Readonly<{
        name: string;
        length: number;
    }[]>) => void;
    placeShip: (ship: IShip, row: number, col: number, dir: TDirection) => boolean;
    receivedAtk: (row: number, col: number) => "hit" | "miss" | "already";
    allShipsSunk: () => boolean;
    get ocean(): TOcean;
    get virtualOcean(): TVirtualOcean;
    get dock(): TDock;
    get deployedShips(): TDock;
    get attackedCoords(): TAttackedCoords;
}
export declare const createGameBoard: () => GameBoard;
export {};
//# sourceMappingURL=board.d.ts.map