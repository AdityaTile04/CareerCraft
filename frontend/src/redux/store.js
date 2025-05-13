import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice.js";
import jobSlice from "./job.slice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    job: jobSlice,
  },
});

export default store;
