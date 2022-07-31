import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessions: [],
  session: null,
};

export const getSessions = createAsyncThunk(
  "get/sessions",
  async (thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/session");
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSessionById = createAsyncThunk(
  "get/sessionById",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/session/${id}`);
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sessionSlice = createSlice({
  name: "sessions",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSessions.fulfilled, (state, action) => {
        state.sessions = action.payload;
      })
      .addCase(getSessionById.fulfilled, (state, action) => {
        state.session = action.payload;
      });
  },
});

export default sessionSlice.reducer;
