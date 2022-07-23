import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  movies: [],
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducer: {},
  extraReducers: {},
})

export default moviesSlice.reducer
