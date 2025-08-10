import type { IPlayer } from "../player/player.ts";

export const showShips = (player: IPlayer) =>
  player.board.ocean.forEach((row, rIndex) => {
    row.forEach((col, cIndex) => {
      const ship = document.querySelector(
        `.cell-${player.id}[data-row="${rIndex}"][data-col="${cIndex}"]`,
      );

      if (col) {
        ship?.classList.add("ship");
      }
    });
  });

export const hideShips = (player: IPlayer) =>
  player.board.deployedShips.map((ship) => {
    const { row, col } = ship.positions;

    const cell = document.querySelector(
      `.cell-${player.id}[data-row"${row}"][data-col"${col}"]`,
    );

    if (!cell) return;

    cell.classList.remove("ship");

    return cell;
  });
