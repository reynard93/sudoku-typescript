import { BLOCK_COORD, GRID } from 'typings'

export interface IReducer {
  challengeGrid?: GRID,
  solvedGrid?: GRID,
  workingGrid?: GRID,
  selectedBlock?: BLOCK_COORD
}
