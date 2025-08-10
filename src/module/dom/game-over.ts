import type { IGame } from "../game/game";
import { disableOcean } from "./update-screen";

export const gameOver = (gameController: IGame) => {
  if (!gameController.isGameOver) return;

  const winContainer = document.querySelector(".success");

  const p = document.createElement("p");

  const winner = gameController.winner?.name;

  p.textContent = `Winner: ${winner}`;

  winContainer?.appendChild(p);

  disableOcean(gameController.playerOne);
  disableOcean(gameController.playerTwo);
};
