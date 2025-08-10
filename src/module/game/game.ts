import { createGameBoard, type IGameBoard } from "../board/board.ts";
import { createPlayer, type IPlayer } from "../player/player.ts";
import { shipBluePrints } from "../player/data/blueprints.ts";
import { wait } from "../lib/wait.ts";

export interface IGame {
  playerOne: IPlayer;
  playerTwo: IPlayer;
  currentPlayer: IPlayer;
  isGameOver: boolean;
  winner: IPlayer | null;
  switchPlayer(): IPlayer;
  playerOneInput(row?: number, col?: number): Promise<void>;
  playerTwoInput(row?: number, col?: number): Promise<void>;
}

class Game implements IGame {
  private _isGameOver: boolean;
  private _winner: IPlayer | null;
  private _playerOneBoard: IGameBoard;
  private _playerTwoBoard: IGameBoard;
  private _playerOne: IPlayer;
  private _playerTwo: IPlayer;
  private _currentPlayer: IPlayer;

  /**
   *
   */
  constructor() {
    this._isGameOver = false;
    this._winner = null;

    this._playerOneBoard = createGameBoard();
    this._playerTwoBoard = createGameBoard();

    this._playerOne = createPlayer({
      name: "Player One",
      board: this._playerOneBoard,
      enemyBoard: this._playerTwoBoard,
      blueprints: shipBluePrints,
    });

    this._playerTwo = createPlayer({
      name: "Player Two",
      board: this._playerTwoBoard,
      enemyBoard: this._playerOneBoard,
      blueprints: shipBluePrints,
    });

    this._currentPlayer = this._playerOne;
  }

  public switchPlayer(): IPlayer {
    if (this._currentPlayer.name === this._playerOne.name) {
      this._currentPlayer = this._playerTwo;
      return this._currentPlayer;
    }

    this._currentPlayer = this._playerOne;

    return this._currentPlayer;
  }

  public async playerOneInput(row?: number, col?: number) {
    if (this.isGameOver) {
      return;
    }

    await wait(2000);

    if (row && col) {
      this._playerOne.atkEnemy(row, col);
    } else {
      this._playerOne.autoAtk();
    }

    if (this._playerTwo.board.allShipsSunk()) {
      this._isGameOver = true;
      this._winner = this._playerOne;

      return;
    }

    this.switchPlayer();
  }

  public async playerTwoInput(row?: number, col?: number) {
    if (this.isGameOver) {
      return;
    }

    await wait(2000);

    if (row && col) {
      this._playerTwo.atkEnemy(row, col);
    } else {
      this._playerTwo.autoAtk();
    }

    if (this._playerTwo.board.allShipsSunk()) {
      this._isGameOver = true;
      this._winner = this._playerTwo;

      return;
    }

    this.switchPlayer();
  }

  get playerOne() {
    return this._playerOne;
  }

  get playerTwo() {
    return this._playerTwo;
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  get isGameOver() {
    return this._isGameOver;
  }

  get winner() {
    return this._winner;
  }
}

export const createGame = () => new Game();
