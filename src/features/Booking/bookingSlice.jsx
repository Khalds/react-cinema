import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: [],
};

export const getBooking = createAsyncThunk("get/booking", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/book");
    const data = await res.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getBooking.fulfilled, (state, action) => {
      state.booking = action.payload;
    });
  },
});

export default bookingSlice.reducer;