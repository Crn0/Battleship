import "./module/dom/game-container";

import { domController } from "./module/dom/controller";
import "./style.css";

const ctr = domController();

const gameController = ctr.gameController;

ctr.shipPlacement(gameController.playerOne, false);
ctr.shipPlacement(gameController.playerTwo, true);
