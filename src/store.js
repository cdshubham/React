import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./account";

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

export default store;
