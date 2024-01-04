/* eslint-disable no-unused-vars */
import CreateBoard from "../board/board";
import CreatePlayer from "../player/player";

export default function Game() {
    let isGameStarted = false;
    const players = [];
    const boards = [];
    let currentPlayer
    // initialized boards and players
    if(isGameStarted === false) {
        boards.push(CreateBoard());
        boards.push(CreateBoard());

        players.push(CreatePlayer("human", boards[0], boards[1]));
        players.push(CreatePlayer("computer",boards[1],boards[0], false));

        players[0].createAllShips();
        players[1].createAllShips();


        currentPlayer = {...players[0]}

        isGameStarted = true;
    };

    const getActivePlayer = () => currentPlayer;
    
    const switchPlayer = () => {
        if(currentPlayer.name === players[0].name) {
            currentPlayer = {...players[1]};
            return currentPlayer;
        };
        
        currentPlayer = {...players[0]};
        return currentPlayer;
    };

    return Object.freeze({
        switchPlayer,
        getActivePlayer,
    });
};