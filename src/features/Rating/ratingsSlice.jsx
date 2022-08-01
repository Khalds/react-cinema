import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: [],
  loading: false,
  error: null,
};

export const addRating = createAsyncThunk(
  "add/rating",
  async ({ rating, id, userId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/ratings/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          rate: rating,
          user: localStorage.getItem("userId"),
        }),
      });
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRating = createAsyncThunk("get/rating", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/movie");
    const data = await res.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRating.fulfilled, (state, action) => {
        console.log(action);
        state.rating.push(action.payload);
        state.error = null;
      })
      .addCase(addRating.pending, (state, action) => {
        // state.rating.push(action.payload);
        // state.error = null;
      })
      .addCase(addRating.rejected, (state, action) => {
        // state.rating.push(action.payload);
        // state.error = null;
      });
    builder
      .addCase(getRating.fulfilled, (state, action) => {
        console.log(action);
        state.rating = action.payload;
      })
      .addCase(getRating.pending, (state, action) => {
        // state.rating.push(action.payload);
        // state.error = null;
      })
      .addCase(getRating.rejected, (state, action) => {
        // state.rating.push(action.payload);
        // state.error = null;
      });
  },
});

export default ratingSlice.reducer;
