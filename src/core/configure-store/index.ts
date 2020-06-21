import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'
import reducer from '../../reducers'

function configureStore(initalState = {}) {
  return createStore(
    reducer,
    initalState,
    devToolsEnhancer({})
  )
}

export default configureStore
