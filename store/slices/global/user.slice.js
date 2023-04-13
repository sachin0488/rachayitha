import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      _id: '',
      username: '',
      email: '',
      gender: '',
    },
    token: '',
    isLoggedIn: false,
  },
  reducers: {
    setUserLogout(state, action) {
      return {
        data: {
          _id: '',
          username: '',
          email: '',
          gender: '',
        },
        // token: '',
        isLoggedIn: false,
      }
    },
    setUserData(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
          tokens: undefined,
        },
      }
    },
    setLoginToken(state, action) {
      return {
        ...state,
        // token: action.payload,
        isLoggedIn: true,
      }
    },
  },
})

export const { setUserData, setLoginToken, setUserLogout, setIsEnrolledInTournament } = userSlice.actions

export const selectUser = state => state.user

export default userSlice.reducer
