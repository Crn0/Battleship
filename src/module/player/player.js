

export default function Player(name, board, enemyBoard, isComputer = false) {
    const isAi = isComputer;
 
    const ocean = board;

    let turn = false;

    const shipBluePrints = [
        {
            name: "carrier",
            length: 5,
        },
        {
    
            name: "battleship",
            length: 4,
        },
        {
    
            name: "cruiser",
            length: 3
        },
        {
    
            name: "submarine",
            length: 3
        },
        {
    
            name: "destroyer",
            length: 2
        },
    ];

    const {dock} = ocean;

    const createAllShips = () => {
        for (let i = 0; i < shipBluePrints.length; i += 1) {

            ocean.createShip(shipBluePrints[i].name, shipBluePrints[i].length)
        };


        return true;
    };

    const atkEnemy = (row, col) => {
        if(Number.isInteger(row) && Number.isInteger(col) && enemyBoard.shipAttacks[row][col] === true) return false;

        if(isAi) {
            let randomRow = Math.floor(Math.random() * 10);
            let randomCol = Math.floor(Math.random() * 10);
       
            while(enemyBoard.shipAttacks[randomRow][randomCol] === true) {
                randomRow = Math.floor(Math.random() * 10);
                randomCol = Math.floor(Math.random() * 10);
            };
            
            enemyBoard.receivedAtk(randomRow, randomCol);
            return true;
        };

        enemyBoard.receivedAtk(row, col);
        return true
    };
 
     return Object.freeze({
         get name() { return name},
         get isAi() { return isAi},
         get board() { return ocean},
         get dock() { return dock},
         get turn() { return turn},
         set turn(val) { turn = val}, 
         atkEnemy,
         createAllShips,
     });
 };