import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/global/user.slice'
import chapterReducer from 'Container/ReadSection/slices/chapter.slice'
import libraryReducer from 'Container/UserProfile/slices/library.slice'

const rootReducer = combineReducers({
  user: userReducer,
  chapter: chapterReducer,
  library: libraryReducer,
})

export default rootReducer
