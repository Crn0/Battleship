import type { IGame } from "../game/game";
import { getOcean } from "./get-ocean";
import { playLogic } from "./play-logic";

export { updateScreen } from "./update-screen";
export { gameOver } from "./game-over";

export const createDomState = (gameController: IGame) => {
  const playerOneOCean = getOcean(gameController.playerOne.id);
  const playerOneOTwo = getOcean(gameController.playerTwo.id);

  playerOneOCean.addEventListener("click", (e) => {
    if (!gameController.gameStarted) return;

    playLogic(e, gameController);
  });

  playerOneOTwo.addEventListener("click", (e) => {
    if (!gameController.gameStarted) return;

    playLogic(e, gameController);
  });
};
