import type { IPlayer } from "../player/player.ts";

export const showShips = (player: IPlayer) =>
  player.board.deployedShips.map((ship) => {
    const { row, col } = ship.positions;

    const cell = document.querySelector(
      `.cell-${player.id}[data-row"${row}"][data-col"${col}"]`,
    );

    if (!cell) return;

    cell.classList.add("ship");

    return cell;
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
