import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  halls: [
    {
      name: "Зал 1",
      row: 4,
      column: 4,
      seats: 16,
    },
  ],
}

export const getHalls = createAsyncThunk("get/halls", async (thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/halls")
    const data = await res.json()

    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const hallsSlice = createSlice({
  name: "halls",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHalls.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  },
})

export default hallsSlice.reducer
