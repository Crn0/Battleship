export interface IShip {
  name: string;
  length: number;
  health: number;
  isShip(): boolean;
  hit(): boolean;
  resetHealth(): void;
  isSunk(): boolean;
  positions: { row: number; col: number };
}

export interface ShipDTO {
  name: string;
  length: number;
}

export class Ship implements IShip {
  private _health: number;
  private _name: string;
  private _length: number;
  private _positions: { row: number; col: number };

  public isShip(): this is typeof Ship {
    return this instanceof Ship;
  }

  constructor(DTO: ShipDTO) {
    this._name = DTO.name;
    this._length = DTO.length;
    this._health = DTO.length;
    this._positions = { row: -1, col: -1 };
  }

  public get name() {
    return this._name;
  }

  public get length() {
    return this._length;
  }

  public get health() {
    return this._health;
  }

  public get positions() {
    return this._positions;
  }

  public set positions(p: { row: number; col: number }) {
    this._positions = p;
  }

  public hit = () => {
    if (this.isSunk()) return false;

    this._health -= 1;

    return true;
  };

  public resetHealth = () => {
    this._health = this._length;
  };

  public isSunk = () => {
    if (this._health === 0) return true;

    return false;
  };
}

export const createShip = (DTO: ShipDTO) => new Ship(DTO);
