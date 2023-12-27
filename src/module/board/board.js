import Ship from "../ship/ship";

export default function GameBoard() {
    const board = Array.from({length: 10}, () => Array(10).fill(false));

    const createShip = (name, length) => Ship(name, length);



    return Object.freeze({
        createShip
    });
};