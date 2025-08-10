import type { IGame } from "../game/game.ts";
import { getOcean } from "./get-ocean.ts";
import { playLogic } from "./play-logic.ts";

export { updateScreen } from "./update-screen.ts";
export { gameOver } from "./game-over.ts";

export const createDomState = (gameController: IGame) => {
  const playerOneOCean = getOcean(gameController.playerOne.id);
  const playerOneOTwo = getOcean(gameController.playerTwo.id);

  playerOneOCean.addEventListener("click", (e) => {
    playLogic(e, gameController);
  });

  playerOneOTwo.addEventListener("click", (e) => {
    playLogic(e, gameController);
  });
};
