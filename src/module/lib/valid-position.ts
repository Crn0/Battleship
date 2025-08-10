import type { IShip } from "../ship/ship.ts";
import type { TDirection, TOcean } from "../board/board.ts";

export const validPosition = (
  ship: IShip,
  row: number,
  col: number,
  dir: TDirection,
  ocean: TOcean,
) => {
  for (let i = 0; i < ship.length; i += 1) {
    if (dir === "horizontal") {
      if (col + i > 9 || !ocean[row] || ocean[row][col + i]?.isShip())
        return false;
    } else {
      if (row + i > 9 || !ocean[row + i] || ocean[row + i]?.[col]?.isShip())
        return false;
    }
  }

  return true;
};
