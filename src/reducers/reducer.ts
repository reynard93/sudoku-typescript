import { AnyAction } from 'redux'
import produce from 'immer'

import {createFullGrid} from 'utils'

import * as types from './types'

const gridReducer = produce((draft, action: AnyAction) => {
  switch (action.type) {
    case types.CREATE_GRID:
      draft.grid = createFullGrid()
    case types.SELECT_BLOCK:
      draft.selectedBlock = action.coords
  }
})

export default gridReducer;
