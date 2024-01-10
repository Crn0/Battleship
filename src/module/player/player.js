import Helper from "../helper/helper";

export default function Player(name, board, enemyBoard, isComputer = false) {
    const isAi = isComputer;
    
    let playerName = name

    const ocean = board;

    const helper = Helper();

    const legalAttacks = helper.legalMoves(ocean);

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
    
    const placeShip = (ship, row, col, dir) => {
        if(isAi) {
            const queue = [...ocean.dock]
   
            while(queue.length !== 0) {
                const currentShip = queue[0];
                
                const randomRow = Math.floor(Math.random() * 9);
                const randomCol = Math.floor(Math.random() * 9);
                
                const direction = ["horizontal", "vertical"];

                const randomDir = Math.floor(Math.random() * direction.length);
                
                if(helper.posAvailable(currentShip, randomRow, randomCol, direction[randomDir], ocean.ocean)) {
                    ocean.placeShip(currentShip, randomRow, randomCol, direction[randomDir]);
            
                    queue.shift();
                };
            };
            
            return true;
        };
        
        return ocean.placeShip(ship, row, col, dir)
    };

   

    const atkEnemy = (row, col) => {
        if(Number.isInteger(row) && Number.isInteger(col) && enemyBoard.shipAttacks[row][col] === true) return false;

        if(isAi) {
            const availableIndex = legalAttacks.filter((val) =>  enemyBoard.shipAttacks[val[0]][val[1]] !== true);
            const choice = availableIndex[Math.floor(Math.random() * availableIndex.length)];
          
            enemyBoard.receivedAtk(choice[0], choice[1]);
            return true;
        };
        
        enemyBoard.receivedAtk(row, col);
        return true
    };
 
     return Object.freeze({
         get name() { return playerName},
         set name(val) { playerName = val}, 
         get board() { return ocean},
         get dock() { return dock},
         atkEnemy,
         createAllShips,
         placeShip
     });
 };