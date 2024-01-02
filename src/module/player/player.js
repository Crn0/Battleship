export default function Player(name, board1, board2, isComputer = false) {
    const isAi = isComputer;
 
    const board = board1;
 
    const enemyBoard = board2;

    const atkEnemy = (row, col) => {
        if(isAi) {
            let randomRow = Math.floor(Math.random() * 10);
            let randomCol = Math.floor(Math.random() * 3);
       
            while(enemyBoard.shipAttacks[randomRow][randomCol] === true) {
                randomRow = Math.floor(Math.random() * 10);
                randomCol = Math.floor(Math.random() * 10);
            }
            enemyBoard.receivedAtk(randomRow, randomCol);
            return true
        };

        if(enemyBoard.shipAttacks[row][col] === false) {
            enemyBoard.receivedAtk(row, col);
            return true
        };
        
        return false;
    };
 
     return Object.freeze({
         get name() { return name},
         get isAi() { return isAi},
         get board() { return board},
         get enemyBoard() { return enemyBoard},
         atkEnemy
     });
 };