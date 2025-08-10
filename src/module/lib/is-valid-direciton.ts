import type { TDirection } from "../board/board.ts";

export const isValidDirection = (dir: string): dir is TDirection => {
  return (
    (dir as TDirection) === "horizontal" || (dir as TDirection) === "vertical"
  );
};
