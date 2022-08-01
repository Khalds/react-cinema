import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sent: [],
};

export const fetchSent = createAsyncThunk("sent/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/mail");
    return await res.json();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

const sentSlice = createSlice({
  name: "sent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSent.fulfilled, (state, action) => {
      state.sent = action.payload;
    });
  },
});

export default sentSlice.reducer;
