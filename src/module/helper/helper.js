
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
     
        ocean.shipAttacks.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                legalAttacks.push([rowIndex, colIndex])
            });
        });

        return legalAttacks;
    };

    return {
        posAvailable,
        wait,
        legalMoves
    };
};




