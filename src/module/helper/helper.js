
export default function Helper() {
    const posAvailable = (ship, row, col, dir, board) => {
        const array = [];

        for (let i = 0; i < ship.length; i += 1) {
            if(dir === "horizontal") {
                if(col + i > 9)  return false;
                array.push(board[row][col + i]);
            };
    
            if(dir === "vertical") {
                if(row + i > 9)  return false;
                array.push(board[row + i][col]);
            };
            
        };

        return array.every((cell) => cell === false);
    };

    const wait = ms => new Promise(resolve => {
        setTimeout(resolve, ms);
    });

    const legalMoves = (ocean) => {
        const legalAttacks = [];
        for (let i = 0; i < ocean.shipAttacks.length; i += 1) {
            for (let j = 0; j < ocean.shipAttacks[i].length; j += 1) {
                if(ocean.shipAttacks[i][j] === false) {
                    legalAttacks.push([i,j]);
                };
            };
        }; 

        return legalAttacks;
    };

    return {
        posAvailable,
        wait,
        legalMoves
    };
};




