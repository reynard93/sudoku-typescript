import {Action, AnyAction} from 'redux'

import * as types from './types'
import { BLOCK_COORD } from '../typings'

export const createGrid = (): Action => ({
  type: types.CREATE_GRID
})

export const selectBlock = (coords: BLOCK_COORD): AnyAction => ({
  type: types.SELECT_BLOCK,
  coords
})
