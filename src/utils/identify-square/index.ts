import { GRID, SQUARE, SQUARE_ROW } from 'typings'

interface IInput {
  grid: GRID
  rowNumber: number
  colNumber: number
}

function identifyWorkingSquare({colNumber, grid, rowNumber}: IInput): SQUARE {
  const startingRow = Math.floor(rowNumber / 3) * 3;
  // if col<3 get cols [0,1,2], < 6 get [3,4,5], < 9 get [6,7,8]
  const startingCol = (Math.floor( colNumber / 3)) * 3;
  return [
    grid[startingRow].slice(startingCol, startingCol + 3) as SQUARE_ROW,
    grid[startingRow + 1].slice(startingCol, startingCol + 3) as SQUARE_ROW,
    grid[startingRow + 2].slice(startingCol, startingCol + 3) as SQUARE_ROW
  ];

}

export default identifyWorkingSquare;
