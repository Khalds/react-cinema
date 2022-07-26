import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
};

export const getGenres = createAsyncThunk("get/genres", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/genre");
    const data = await res.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export default genreSlice.reducer;