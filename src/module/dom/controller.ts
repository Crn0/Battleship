import type { IPlayer } from "../player/player";
import { createGame, type IGame } from "../game/game";
import { createAnnouncement } from "./create-announcement";
import { createDirection } from "./create-direction";
import { createDomState } from "./create-dom-state";
import { initGame } from "./init-game";
import { createShipPlacement } from "./ship-portage";

export const domController = (): {
  gameController: IGame;
  domState: void;
  shipPlacement(player: IPlayer, random?: boolean): void;
} => {
  const root = document.getElementById("root");

  if (!root) throw new Error("No root element found");

  const gameController = createGame();

  const gameContainer = initGame(gameController);

  const announcement = createAnnouncement();

  const direction = createDirection(announcement);

  const shipPlacement = createShipPlacement(direction);

  root.appendChild(announcement);

  root.appendChild(gameContainer);

  const domState = createDomState(gameController);

  return { gameController, domState, shipPlacement };
};
