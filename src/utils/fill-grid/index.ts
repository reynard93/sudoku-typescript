import { GRID, NUMBERS } from 'typings'
import shuffle from '../shuffle'
import { identifySquare } from '../index'
import checkGrid from '../check-grid'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)
        for (let value of numbers) {
          // not in the grid row && col && square?
          if (!grid[row].includes(value) && grid.every(row => {
            return row[col] !== value
          })) {
            const square = identifySquare({colNumber: col, grid, rowNumber: row})
            if (square.every(squareRow => !squareRow.includes(value))) {
              grid[row][col] = value
              // if grid is full, stop and return true
              if (checkGrid(grid)) return true
              // otherwise we run fillGrid(grid)
              else if (fillGrid(grid)) return true
            }
          }
        }
      break
    }
  }
  grid[row][col] = 0
}

export default fillGrid
