export const ensureRow = <T>(arr: T[][], row: number) =>
  arr[row] ?? (arr[row] = []);
