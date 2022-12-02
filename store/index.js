import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import rootReducer from './root.reducer'
import storage from '../utility/webStore'
import { FLUSH, REHYDRATE, PAUSE } from 'redux-persist'
import { PERSIST, PURGE, REGISTER } from 'redux-persist'
import { setAuthToken } from '../api/global.api'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const saveAuthToken = store => next => action => {
  const state = store.getState()

  if (action.type === LOGIN_SUCCESS) {
    setAuthToken(state.user.token)
  }

  return next(action)
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([saveAuthToken]),
})

export default store
