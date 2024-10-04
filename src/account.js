import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      console.log("state", state);
      console.log("action", action);
      return state + 4;
    },
    decrement(state) {
      return state - 4;
    },
    randomIncrement(state, action) {
      return state + action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        console.log("state", state);
        console.log("action", action);
        return state + action.payload.amount * action.payload.purpose;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        console.log("pending", action.payload);
        console.log(state);
        return "loading...";
        // You may want to update the state here to reflect the pending state
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        console.log("fulfilled", action.payload);
        console.log(state);
        return action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log("rejected");
        return "rejected";
      });
  },
});

export const { increment, requestLoan } = counterSlice.actions;
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await fetch("https://api.adviceslip.com/advice").then((data) =>
    data.json()
  );
  return res.slip.advice;
});

export function randomIncrement(numbers) {
  return async function (dispatch, getState) {
    const res = await fetch("https://api.adviceslip.com/advice").then((data) =>
      data.json()
    );

    // const data = await res.json();
    console.log(res);

    dispatch({ type: "counter/randomIncrement", payload: res.slip.advice });
  };
}
