export interface IShip {
    name: string;
    length: number;
    health: number;
    isShip(): boolean;
    hit(): boolean;
    resetHealth(): void;
    isSunk(): boolean;
    positions: {
        row: number;
        col: number;
    };
}
export interface ShipDTO {
    name: string;
    length: number;
}
export declare class Ship implements IShip {
    private _health;
    private _name;
    private _length;
    private _positions;
    isShip(): this is typeof Ship;
    constructor(DTO: ShipDTO);
    get name(): string;
    get length(): number;
    get health(): number;
    get positions(): {
        row: number;
        col: number;
    };
    set positions(p: {
        row: number;
        col: number;
    });
    hit: () => boolean;
    resetHealth: () => void;
    isSunk: () => boolean;
}
export declare const createShip: (DTO: ShipDTO) => Ship;
//# sourceMappingURL=ship.d.ts.map