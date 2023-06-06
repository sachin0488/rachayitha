import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/global/user.slice'
import chapterReducer from 'Container/ReadSection/slices/chapter.slice'
import chapterPoemReducer from 'Container/ReadPoemSection/slices/chapter.slice'

const rootReducer = combineReducers({
  user: userReducer,
  chapter: chapterReducer,
  chapterPoem: chapterPoemReducer,
})

export default rootReducer
