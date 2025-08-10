import "./module/dom/game-container.ts";

import { domController } from "./module/dom/controller.ts";
import "./style.css";

const ctr = domController();

const gameController = ctr.gameController;

ctr.shipPlacement(gameController.playerOne, gameController.playerTwo.id, false);
ctr.shipPlacement(gameController.playerTwo, gameController.playerOne.id, true);

ctr.domState;
