import type { IGame } from "../game/game.ts";
import { disableOcean } from "./update-screen.ts";

export const gameOver = (gameController: IGame) => {
  if (!gameController.isGameOver) return;

  const winContainer = document.querySelector(".winner");

  const p = document.createElement("p");

  const winner = gameController.winner?.name;

  p.textContent = `Winner: ${winner}`;

  winContainer?.appendChild(p);

  disableOcean(gameController.playerOne);
  disableOcean(gameController.playerTwo);
};
