import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/global/user.slice'

const rootReducer = combineReducers({
  user: userReducer,
})

export default rootReducer
