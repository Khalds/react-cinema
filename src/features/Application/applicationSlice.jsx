import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
  signingUp: false,
  signingIn: false,
  authError: null,
  registrError: null,
  users: null,

  token: localStorage.getItem("token"),
  user: localStorage.getItem("user"),
}

export const createUser = createAsyncThunk(
  "registration/post",
  async ({ name, lastName, login, email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/registration", {
        method: "POST",
        body: JSON.stringify({
          name,
          lastName,
          login,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
      const data = await res.json()
      if (data.message) {
        return thunkAPI.rejectWithValue(data.message)
      } else {
        return thunkAPI.fulfillWithValue(data)
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const auth = createAsyncThunk(
  "login/post",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-type": "application/json",
        },
      })
      const data = await res.json()
      if (data.message) {
        return thunkAPI.rejectWithValue(data.message)
      } else {
        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("user", data.user.id)

        return thunkAPI.fulfillWithValue(data)
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)
export const usersData = createAsyncThunk("login/get", async (id, thunkAPI) => {
  const state = thunkAPI.getState()
  try {
    const res = await fetch(`http://localhost:4000/getUsers/${id}`, {
      headers: {
        Authorization: `Bearer ${state.application.token}`,
      },
    })
    const data = await res.json()

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error)
    } else {
      return thunkAPI.fulfillWithValue(data)
    }
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const exit = createAsyncThunk("exit", async (_, thunkAPI) => {
  localStorage.removeItem("token")
})

const application = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.signingUp = false
        state.token = action.payload.token
        state.user = action.payload.user
        state.registered = true
        state.registrError = 1
      })
      .addCase(createUser.pending, (state, action) => {
        state.signingUp = true
        state.registrError = null
      })
      .addCase(createUser.rejected, (state, action) => {
        state.registrError = action.payload
        state.signingUp = false
      })

      .addCase(auth.fulfilled, (state, action) => {
        state.signingIn = false
        state.token = action.payload.token
        state.authError = null
        state.user = action.payload.user.id
      })
      .addCase(auth.pending, (state, action) => {
        state.signingIn = true
      })
      .addCase(auth.rejected, (state, action) => {
        state.authError = action.payload
        state.signingIn = false
        state.token = null
      })
      .addCase(usersData.fulfilled, (state, action) => {
        state.users = action.payload
      })
  },
})

export default application.reducer
