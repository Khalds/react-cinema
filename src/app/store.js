import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "../features/Movies/moviesSlice"

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
})
