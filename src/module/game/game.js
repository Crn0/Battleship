import CreateBoard from "../board/board";
import CreatePlayer from "../player/player";
import Helper from "../helper/helper";

export default function Game() {
    let isGameStarted = false;
    let currentPlayer;

    const players = [];
    const boards = [];

    const wait = (ms) => Helper().wait(ms);

    // initialized boards and players
    if(isGameStarted === false) {
        boards.push(CreateBoard());
        boards.push(CreateBoard());
       

        players.push(CreatePlayer("human", boards[0], boards[1]));
        players.push(CreatePlayer("computer",boards[1],boards[0], true));
        
        players[0].createAllShips();
        players[1].createAllShips();

        currentPlayer = {...players[0]} 
        isGameStarted = true;
        
    };

    
    const getActivePlayer = () => currentPlayer;

    const isSunkAll = (player = getActivePlayer()) => player.board.shipWrecks();
    
    const switchPlayer = () => {
        if(currentPlayer.name === players[0].name) {
            currentPlayer = {...players[1]};
            return currentPlayer;
        };
        
        currentPlayer = {...players[0]};
        return currentPlayer;
    };

    const humanInput = async (row, col) => {
        await wait(1000)
        players[0].atkEnemy(row, col);
        switchPlayer()
        return true;
    };

    const computerInput = async () => {
        if(isSunkAll()) return false;
        await wait(3000);
        players[1].atkEnemy();
        switchPlayer()
        return true
    };

    
    return Object.freeze({
        get players() { return players},
        getActivePlayer,
        switchPlayer,
        isSunkAll,
        humanInput,
        computerInput,
        
    });
};