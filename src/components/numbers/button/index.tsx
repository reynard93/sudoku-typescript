import React, { FC, useCallback } from 'react'
import { Button } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { fillBlock, IReducer } from 'reducers'
import { BLOCK_COORD, N, NUMBERS } from 'typings'

interface IProps {
  value: NUMBERS
}

interface IState {
  selectedBlock?: BLOCK_COORD
  selectedValue: N
}

const NumberButton: FC<IProps> = ({ value }) => {
  // similar to before, probably better to extract into a hook function
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    }),
  )

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0) {
      dispatch(fillBlock(value, state.selectedBlock))
    }
  }, [dispatch, state.selectedBlock, state.selectedValue, value])

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
