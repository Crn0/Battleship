import type { IGame } from "../game/game";
import { createOcean } from "./create-ocean";

const createGameContainer = (game: IGame) => {
  const container = document.createElement("div");

  container.setAttribute("id", "game-container");

  const playerOne = document.createElement("div");

  playerOne.setAttribute("id", "player-one");

  const playerTwo = document.createElement("div");

  playerTwo.setAttribute("id", "player-two");

  const playerOneName = document.createElement("p");

  playerOneName.textContent = game.playerOne.name;

  const playerTwoName = document.createElement("p");

  playerTwoName.textContent = game.playerTwo.name;

  const playerOneOCean = createOcean(game.playerOne);
  const playerTwoOCean = createOcean(game.playerTwo);

  playerOne.appendChild(playerOneOCean);
  playerTwo.appendChild(playerTwoOCean);

  container.appendChild(playerOne);
  container.appendChild(playerTwo);

  return container;
};

export const initGame = (gameController: IGame) => {
  const gameContainer = createGameContainer(gameController);

  return gameContainer;
};
