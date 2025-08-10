export const createBoard = <T>(
  length: number,
  fn: (row: number, col: number) => T,
) =>
  Array.from({ length }, (_, row) =>
    Array.from({ length }, (_, col) => fn(row, col)),
  );
