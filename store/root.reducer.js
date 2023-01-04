import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/global/user.slice'
import chapterReducer from 'container/ReadSection/slices/chapter.slice'
import libraryReducer from 'container/UserProfile/slices/library.slice'

const rootReducer = combineReducers({
  user: userReducer,
  chapter: chapterReducer,
  library: libraryReducer,
})

export default rootReducer
