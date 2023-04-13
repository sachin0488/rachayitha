import { createSlice } from '@reduxjs/toolkit'

export const featuredSlice = createSlice({
  name: 'featured',
  initialState: {
    address: '',
    v: 0,
    list: [],
    next_page: null,
    previous_page: null,
    page: 1,
  },
  reducers: {
    setFeaturedListPage(state, action) {
      return {
        ...state,
        page: action?.payload,
      }
    },
    resetFeaturedList(state, action) {
      return {
        address: '',
        v: 0,
        list: [],
        next_page: null,
        previous_page: null,
        page: 1,
      }
    },
    setFeaturedList(state, action) {
      const { address, list, next_page, previous_page, page } = action.payload
      return {
        ...state,
        v: 1,
        list: list,
        next_page: next_page,
        previous_page: previous_page,
        address,
        pages: [page],
        page,
      }
    },
    addContentToFeaturedList(state, action) {
      const { address, list, next_page, previous_page, page } = action.payload
      return {
        ...state,
        address,
        v: state.v + 1,
        list: [...state?.list, ...list],
        next_page: next_page,
        previous_page: previous_page,
        pages: [...state?.pages, page],
        page,
      }
    },
  },
})

export const { setFeaturedListPage, resetFeaturedList, setFeaturedList, addContentToFeaturedList } =
  featuredSlice.actions

export const selectFeaturedList = state => state.featured

export default featuredSlice.reducer
// return {
//   ...state,
//   [type]: {
//     ...state?.[type],
//     [categoryId]: {
//       ...state?.[type]?.[categoryId],
//       [sort]: {
//         v: 1,
//         list: list,
//         next_page: next_page,
//         previous_page: previous_page,
//         pages: [page],
//       },
//     },
//   },
// }
// return {
//   ...state,
//   [type]: {
//     ...state?.[type],
//     [categoryId]: {
//       ...state?.[type]?.[categoryId],
//       [sort]: {
//         ...state?.[type]?.[categoryId]?.[sort],
//         v: state.v + 1,
//         list: [...state?.[type]?.[categoryId]?.[sort]?.list, ...list],
//         next_page: next_page,
//         previous_page: previous_page,
//         pages: [...state?.[type]?.[categoryId]?.[sort]?.pages, page],
//       },
//     },
//   },
// }
