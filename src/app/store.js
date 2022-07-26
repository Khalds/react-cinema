import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "../features/Movies/moviesSlice"
import genreSlice from "../features/Genres/genreSlice"
import sessionSlice from "../features/Sessions/sessionSlice"
import hallSlice from "../features/Halls/hallSlice"

export const store = configureStore({
  reducer: {
    movieReducer: moviesSlice,
    genreReducer: genreSlice,
    sessionReducer: sessionSlice,
    hallReducer: hallSlice,
  },
})
