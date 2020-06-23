import { GRID } from 'typings'
import global from 'global';
import {copyGrid, solveGrid} from 'utils'
/**
 * Removes numbers from a full grid to create puzzle
  @param grid 9x9
  @param attempts number of attempts to solve (higher means more difficult)
 */

function removeNumbers(grid: GRID, attempts = 5): GRID {
 while (attempts > 0) {
  let row = Math.floor(Math.random() * Math.floor(9));
  let col = Math.floor(Math.random() * Math.floor(9));
  while (grid[row][col] === 0) {
   row = Math.floor(Math.random() * Math.floor(9));
   col = Math.floor(Math.random() * Math.floor(9));
  }
  const backup = grid[row][col]
  grid[row][col] = 0

  // copy grid
  const gridCopy = copyGrid(grid)
  global.counter = 0 // is complete false
  // attempt to solve grid
  solveGrid(gridCopy)
  // if removing number makes it unsolvable revert
  if (global.counter !== 1) {
   grid[row][col] = backup
   attempts--
  }
 }
 return grid
}

export default removeNumbers;
