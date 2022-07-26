import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  halls: [],
  loading: false
};

export const getHalls = createAsyncThunk("get/halls", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/hall");
    const data = await res.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const hallSlice = createSlice({
  name: "halls",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getHalls.fulfilled, (state, action) => {
      state.halls = action.payload;
    });
  },
});

export default hallSlice.reducer;