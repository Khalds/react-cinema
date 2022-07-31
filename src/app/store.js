import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "../features/Movies/moviesSlice"
import genreSlice from "../features/Genres/genreSlice"
import sessionSlice from "../features/Sessions/sessionSlice"
import hallSlice from "../features/Halls/hallSlice"
import bookingSlice from "../features/Booking/bookingSlice"
import seatSlice from "../features/Seat/seatSlice"
import cinemaSlice from "../features/Cinema/cinemaSlice"
import application from "../features/Application/applicationSlice"

export const store = configureStore({
  reducer: {
    movieReducer: moviesSlice,
    genreReducer: genreSlice,
    sessionReducer: sessionSlice,
    hallReducer: hallSlice,
    bookingReducer: bookingSlice,
    seatReducer: seatSlice,
    cinemaReducer: cinemaSlice,
    application: application
  },
})
