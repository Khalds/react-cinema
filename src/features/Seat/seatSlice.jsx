import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  seats: [],
  cosrin: []
};

export const getSeats = createAsyncThunk("get/seats", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/seat");
    const data = await res.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const makeBooking = createAsyncThunk(
  "make/booking",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/seat/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isBlocked: true,
        }),
      });
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const seatSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    choseSeat(state, action) {
      state.seats = state.seats.map((seat) => {
        if (seat._id === action.payload) {
          seat.isChosed = true;
          return seat;
        }

        return seat;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSeats.fulfilled, (state, action) => {
        state.seats = action.payload;
      })
      .addCase(makeBooking.pending, (state, action) => {})
      .addCase(makeBooking.fulfilled, (state, action) => {
        state.seats = state.seats.map((element) => {
          
          if (element._id === action.payload._id) {
            return action.payload;
          }
          return element;
        });
      });
  },
});

export const { choseSeat } = seatSlice.actions;
export default seatSlice.reducer;
