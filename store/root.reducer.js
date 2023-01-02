import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/global/user.slice'
import chapterReducer from 'container/ReadSection/slices/chapter.slice'

const rootReducer = combineReducers({
  user: userReducer,
  chapter: chapterReducer,
})

export default rootReducer
