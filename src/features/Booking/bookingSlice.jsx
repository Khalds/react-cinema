import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  chosedSeats: [],
  isBusy: false,
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

export const createBooking = createAsyncThunk(
  "create/booking",
  async (arr, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  arr }),
      });

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    choseSeat(state, action) {
      state.chosedSeats.push(action.payload);
      state.isBusy = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooking.fulfilled, (state, action) => {
        state.bookings = action.payload;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
      });
  },
});

export const { choseSeat } = bookingSlice.actions;
export default bookingSlice.reducer;
