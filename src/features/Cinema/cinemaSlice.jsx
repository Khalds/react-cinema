import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cinema: [],
};

export const getCinema = createAsyncThunk("get/cinema", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/cinemas");
    const data = await res.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getCinema.fulfilled, (state, action) => {
      state.cinema = action.payload;
    });
  },
});

export default cinemaSlice.reducer;
