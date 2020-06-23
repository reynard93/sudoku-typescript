import { AnyAction } from 'redux'
import produce from 'immer'

import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils'

import * as types from './types'

const gridReducer = produce((draft, action: AnyAction) => {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy)
      draft.challengeGrid = challengeGrid
      draft.solvedGrid = solvedGrid
      draft.workingGrid = copyGrid(challengeGrid)
    case types.FILL_BLOCK:
      if (draft.workingGrid && draft.solvedGrid) {
        if (draft.solvedGrid[action.coords[0]][action.coords[1]]
        !== action.value
        ) {
          alert('incorrect state')
        }
        draft.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(draft.workingGrid, draft.solvedGrid)) {
          alert('completed!')
        }
      }
    case types.SELECT_BLOCK:
      draft.selectedBlock = action.coords
  }
})

export default gridReducer;
