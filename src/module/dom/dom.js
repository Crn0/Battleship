import Game from "../game/game";
import createGame from "./board-player/board-player";
import Portage from "./ship-portage/ship-portage"
import DomState from "./dom-state/dom-state";

export default function Dom() {
    const container = document.querySelector(".game-container");
    const placeShipBtn = document.querySelector(".place-ship");

    const game = Game();   

    const createPlayerAndBoard = () => createGame(game.players, container, placeShipBtn)

    const placeShip = () => Portage(game, placeShipBtn);

    const boardEvent = () => DomState(game)
    

    return Object.freeze({
        createPlayerAndBoard,
        placeShip,
        boardEvent,
    });
};