import type { IPlayer } from "../player/player.ts";

export const renderShips = (player: IPlayer) => {
  player.board.deployedShips.forEach((ship) => {
    const { row, col } = ship.positions;

    const cell = document.querySelector(
      `.cell-${player.id}[data-row"${row}"][data-col"${col}"]`,
    );

    if (!cell) return;

    cell.classList.add("ship");
  });
};
