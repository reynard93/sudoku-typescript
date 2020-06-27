import { AnyAction, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer, { IReducer } from 'reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer: {
  (state: any, action: AnyAction): IReducer
} = persistReducer(persistConfig, reducer)

function configureStore(initalState = {}) {
  const store = createStore(persistedReducer, initalState, devToolsEnhancer({}))
  const persistor = persistStore(store)
  return {store, persistor}
}

export default configureStore
