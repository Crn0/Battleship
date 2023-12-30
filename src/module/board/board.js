import Ship from "../ship/ship";

const posAvailable = (ship, row, col, dir, board) => {
    const array = [];

    for (let i = 0; i < ship.length; i += 1) {
        if(dir === "horizontal") {
            array.push(board[row][col + i]);
        };

        if(dir === "vertical") {
            array.push(board[row + i][col])
        };
        
    };

    return array.every((cell) => cell === false);
};

export default function GameBoard() {
    const board = Array.from({length: 10}, () => Array(10).fill(false));

    const shipAttacks = Array.from({length: 10}, () => Array(10).fill(false));

    const dock = [];

    const createShip = (name, length) => {
        const ship = Ship(name, length);

        dock.push(ship)

        return ship;
    }; 

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

    const receivedAtk = (row, col) => {
        if(shipAttacks[row][col] === true) return false;
        if(board[row][col] === false && shipAttacks[row][col] === false) {
            shipAttacks[row][col] = true;
            return false;
        };

        board[row][col].hit()
        shipAttacks[row][col] = true;

        return true;
    };

    const shipWrecks = (ships = dock) => {
        const shipGrave = [];

        for (let i = 0; i < ships.length; i += 1) {
            if(ships[i].isSunk() === true || ships[i].isSunk() === false) {
                shipGrave.push(ships[i].isSunk())
            };
        };
        
        return shipGrave.every(shipSunk => shipSunk === true);
    };

    return Object.freeze({
        get board() { return board},
        get shipAttacks() { return shipAttacks},
        get dock() { return dock},
        createShip,
        placeShip,
        receivedAtk,
        shipWrecks,
       
    });
};