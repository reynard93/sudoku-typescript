import { GRID } from 'typings'

/**
 * A function to check if the grid is full
 * @param grid A 9X9 Sudoku Grid
 */
function checkGrid(grid: GRID): boolean {
  return grid.every(row => row.every(entry => entry !== 0))
}

export default checkGrid
