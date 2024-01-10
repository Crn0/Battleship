import DomController from "./module/dom/dom-controller"
// import game from "./module/game/game"
import "./style.css";

const dom = DomController()
dom.createPlayerAndBoard()
dom.placeShip()
dom.boardEvent()

// dom.updateScreen()