import type { IGame } from "../game/game.ts";
import { gameOver } from "./game-over.ts";
import { disableOcean, enableOcean, updateScreen } from "./update-screen.ts";

export const playLogic = async (e: MouseEvent, gameController: IGame) => {
  const target = e?.target as HTMLElement;

  if (!target) return;

  const { row } = target.dataset;
  const { col } = target.dataset;

  try {
    if (gameController.isGameOver) return gameOver(gameController);

    if (row !== undefined && col !== undefined) {
      if (
        target.classList.contains("hit") ||
        target.classList.contains("boards")
      ) {
        return false;
      }

      const parent = target.parentNode;

      if (!parent) return;

      disableOcean(gameController.currentPlayer);

      await gameController.playerOneInput(+row, +col);

      await gameController.playerTwoInput();

      updateScreen(gameController);

      enableOcean(gameController.currentPlayer);

      return;
    }

    const error = Error("you clicked the board frame");
    throw error;
  } catch (error) {
    return error;
  }
};
