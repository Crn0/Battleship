import type { IGame } from "../game/game";
import { gameOver } from "./game-over";
import { disableOcean, enableOcean, updateScreen } from "./update-screen";

export const playLogic = async (e: MouseEvent, gameController: IGame) => {
  const target = e?.target as HTMLElement;

  if (!target) return;

  const { row } = target.dataset;
  const { col } = target.dataset;

  try {
    if (gameController.isGameOver) {
      return;
    }

    if (row !== undefined && col !== undefined) {
      if (
        target.classList.contains("hit") ||
        target.classList.contains("boards")
      ) {
        return false;
      }

      const parent = target.parentNode;

      if (!parent) return;

      await gameController.playerOneInput(+row, +col);

      await gameController.playerTwoInput();

      updateScreen(gameController);

      if (gameController.isGameOver) {
        return gameOver(gameController);
      }

      return;
    }

    const error = Error("you clicked the board frame");
    throw error;
  } catch (error) {
    return error;
  }
};
