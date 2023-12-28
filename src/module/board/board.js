import Ship from "../ship/ship";

const posAvailable = (ship, row, col, dir, board) => {
    const array = [];

    for (let i = 0; i < ship.length; i += 1) {
        if(dir === "horizontal") {
            array.push(board[row][col + 1]);
        };

        if(dir === "vertical") {
            array.push(board[row + i][col])
        };
        
    };

    return array.every((cell) => cell === false);
};

export default function GameBoard() {
    const board = Array.from({length: 10}, () => Array(10).fill(false));

    const createShip = (name, length) => Ship(name, length); 

    const placeShip = (ship, row, col, dir) => {
        if(posAvailable(ship, row, col, dir, board)) {
            for (let i = 0; i < ship.length; i += 1) {
                if(dir === "horizontal") {
                    board[row][col + i] = ship;
                };

                if(dir === "vertical") {
                    board[row + i][col] = ship;
                };
            };

            return true
        };

        return false
    };

    return Object.freeze({
        createShip,
        placeShip,
        get board() { return board},
    });
};