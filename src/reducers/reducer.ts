import { AnyAction } from 'redux'
import produce from 'immer'

import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils'

import * as types from './types'
import { IReducer } from './interfaces'

const initialState: IReducer = {}

const gridReducer = (state = initialState, action: AnyAction) =>
  produce(state, draft => {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy)
      draft.challengeGrid = challengeGrid
      draft.solvedGrid = solvedGrid
      draft.workingGrid = copyGrid(challengeGrid)
      break
    case types.FILL_BLOCK:
      if (state.workingGrid && state.solvedGrid) {
        if (state.solvedGrid[action.coords[0]][action.coords[1]]
        !== action.value
        ) {
          alert('incorrect option')
          return
        }
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('completed!')
        }
        if (draft.workingGrid) {
          draft.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        }
      }
      break
    case types.SELECT_BLOCK:
      draft.selectedBlock = action.coords
      break
    default:
      return state
  }
})

export default gridReducer;
