import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "../features/Movies/moviesSlice"
import genreSlice from "../features/Genres/genreSlice"
import hallsSlice from "../features/Halls/hallsSlice"

export const store = configureStore({
  reducer: {
    movieReducer: moviesSlice,
    genreReducer: genreSlice,
    hallReducer: hallsSlice,
  },
})
