import type { IGameBoard } from "../../board/board.ts";

export const legalMoves = (board: IGameBoard) => {
  const legalAttacks: number[][] = [];

  board.virtualOcean.forEach((_) => {
    _.forEach(([row, col]) => {
      legalAttacks.push([row, col]);
    });
  });

  return legalAttacks;
};
