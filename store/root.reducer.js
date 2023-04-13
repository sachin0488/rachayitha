import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/global/user.slice'
import chapterReducer from 'Container/ReadSection/slices/chapter.slice'
import chapterPoemReducer from 'Container/ReadPoemSection/slices/chapter.slice'
import libraryReducer from 'Container/UserProfile/slices/library.slice'
import searchReducer from './slices/global/search.slice'
import featuredReducer from 'Container/FeatureSection/slices/featured.slice'

const rootReducer = combineReducers({
  user: userReducer,
  chapter: chapterReducer,
  chapterPoem: chapterPoemReducer,
  library: libraryReducer,
  search: searchReducer,
  featured: featuredReducer,
})

export default rootReducer
