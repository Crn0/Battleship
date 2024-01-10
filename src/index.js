import DomController from "./module/dom/dom-controller"

import "./style.css";

const dom = DomController()
dom.createPlayerAndBoard()
dom.placeShip()
dom.boardEvent()

