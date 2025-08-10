import type { IGame } from "../game/game.ts";
import type { IPlayer } from "../player/player.ts";

export const renderAttackedCoords = (player: IPlayer) => {
  player.board.attackedCoords.forEach((row, rIndex) => {
    row.forEach((col, cIndex) => {
      if (col === null) return;

      const cell = document.querySelector(
        `.cell-${player.id}[data-row="${rIndex}"][data-col="${cIndex}"]`,
      );

      if (!cell) return;

      if (!cell.classList.contains("hit") && col === 0) {
        cell.textContent = "miss";
        cell.classList.add("hit");
      }

      if (col === 1) {
        cell.textContent = "hit";
        cell.classList.add("sink");
      }
    });
  });
};

export const renderSunkShips = (player: IPlayer) => {
  const sunkShips = player.board.deployedShips.filter((ship) => ship.isSunk());

  sunkShips.forEach((ship) => {
    const { row, col } = ship.positions;

    const cell = document.querySelector(
      `.cell-${player.id}[data-row="${row}"][data-col="${col}"]`,
    );

    cell?.classList.add("sink");
  });
};

export const disableOcean = (player: IPlayer) => {
  const container = document.querySelector(
    `${player.id}-container`,
  ) as HTMLElement;

  if (!container) {
    throw new Error(`Ocean of player with ID of ${player.id} does not exist`);
  }

  container?.childNodes.forEach((c) => {
    const node = c as HTMLElement;

    node.style.pointerEvents = "none";
  });

  container.style.pointerEvents = "none";
};

export const enableOcean = (player: IPlayer) => {
  const container = document.querySelector(
    `${player.id}-container`,
  ) as HTMLElement;

  if (!container) {
    throw new Error(`Ocean of player with ID of ${player.id} does not exist`);
  }

  container?.childNodes.forEach((c) => {
    const node = c as HTMLElement;

    node.style.pointerEvents = "auto";
  });

  container.style.pointerEvents = "auto";
};

export const updateScreen = (gameController: IGame) => {
  const { playerOne, playerTwo } = gameController;

  renderAttackedCoords(playerOne);
  renderAttackedCoords(playerTwo);

  console.log(playerTwo.board.attackedCoords);

  renderSunkShips(playerOne);
  renderSunkShips(playerTwo);
};
