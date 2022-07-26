import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  movies: [],
}

export const getMovies = createAsyncThunk("get/movies", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/movie")
    const data = await res.json()

    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  },
})

export default movieSlice.reducer
