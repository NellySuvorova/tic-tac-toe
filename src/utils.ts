import { Cell } from "./interfaces";

export const makeBoard = (n: number): Cell[] => {
  const cells: Cell[] = [];

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n; k++) {
      const block = { k, i, symbol: null };
      cells.push(block);
    }
  }

  return cells;
};
