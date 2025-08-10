import { type IPlayer } from "../player/player";
export interface IGame {
    playerOne: IPlayer;
    playerTwo: IPlayer;
    currentPlayer: IPlayer;
    isGameOver: boolean;
    winner: IPlayer | null;
    switchPlayer(): IPlayer;
    playerOneInput(row?: number, col?: number): Promise<void>;
    playerTwoInput(row?: number, col?: number): Promise<void>;
    gameStarted: boolean;
}
declare class Game implements IGame {
    private _isGameOver;
    private _winner;
    private _playerOneBoard;
    private _playerTwoBoard;
    private _playerOne;
    private _playerTwo;
    private _currentPlayer;
    /**
     *
     */
    constructor();
    switchPlayer(): IPlayer;
    playerOneInput(row?: number, col?: number): Promise<void>;
    playerTwoInput(row?: number, col?: number): Promise<void>;
    get gameStarted(): boolean;
    get playerOne(): IPlayer;
    get playerTwo(): IPlayer;
    get currentPlayer(): IPlayer;
    get isGameOver(): boolean;
    get winner(): IPlayer | null;
}
export declare const createGame: () => Game;
export {};
//# sourceMappingURL=game.d.ts.map