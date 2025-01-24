import { configureStore } from '@reduxjs/toolkit'
import addBookReducer from './features/additionSlice'

export const store = configureStore({
  reducer: {
    pushBook: addBookReducer
  },
})