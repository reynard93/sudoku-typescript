import React, { FC } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux'

import {IReducer, selectBlock} from 'reducers'
import { Container } from './styles'
import { INDEX, N } from 'typings'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  value: N
  isActive: boolean,
  isPuzzle: boolean
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>
  (({
      workingGrid,
      selectedBlock,
      challengeGrid
  })=> ({
    isActive: selectedBlock ?
      selectedBlock[0] === rowIndex &&
      selectedBlock[1] === colIndex
      : false,
    isPuzzle: !!(challengeGrid &&
      challengeGrid[rowIndex][colIndex] !== 0),
    value: workingGrid ? workingGrid[rowIndex][colIndex] : 0
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }
  return <Container
    active={state.isActive}
    data-cy={`block-${rowIndex}-${colIndex}`}
    onClick={handleClick}
    puzzle={state.isPuzzle}
  >
    {state.value === 0 ? '' : state.value}
  </Container>
}

export default Block
