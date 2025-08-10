import type { IPlayer } from "../player/player.ts";
import { createGame, type IGame } from "../game/game.ts";
import { createAnnouncement } from "./create-announcement.ts";
import { createDirection } from "./create-direction.ts";
import { createDomState } from "./create-dom-state.ts";
import { initGame } from "./init-game.ts";
import { createShipPlacement } from "./ship-portage.ts";

export const domController = (): {
  gameController: IGame;
  domState: void;
  shipPlacement(player: IPlayer, enemyId: string, random?: boolean): void;
} => {
  const root = document.getElementById("root");

  if (!root) throw new Error("No root element found");

  const gameController = createGame();

  const gameContainer = initGame(gameController);

  const announcement = createAnnouncement();

  const direction = createDirection(announcement);

  const shipPlacement = createShipPlacement(direction);

  const domState = createDomState(gameController);

  root.appendChild(announcement);

  root.appendChild(gameContainer);

  return { gameController, domState, shipPlacement };
};
