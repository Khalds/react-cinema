import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  loading: false,
  error: false,
};

//! Вывод комментов

export const getAllReviews = createAsyncThunk(
  "get/reviews",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/reviews");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! Добавление коммента

export const postReview = createAsyncThunk(
  "post/review",
  async ({comment, user}, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          text: comment,
          user
        }),
      });
      const data = await res.json();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//! Удаление комментов

export const delReviewById = createAsyncThunk(
  "delet/review",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/review/${id}`, {
        method: "DELETE",
      });
      await res.json(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

///////////////////////////////////////

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    //! Вывод комментов
    builder
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllReviews.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllReviews.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
    //! Добавление коммента
    builder
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
        state.loading = false;
        state.error = false;
      })
      .addCase(postReview.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(postReview.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
    //! Удаление комментов
    builder
      .addCase(delReviewById.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((review) => {
          return review._id !== action.payload;
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(delReviewById.pending, (state, action) => {
        state.reviews.map((item) => {
          if (item._id === action.meta.arg) {
            item.deleting = true;
          }
          return item;
        });
        state.error = false;
      })
      .addCase(delReviewById.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default reviewsSlice.reducer;
