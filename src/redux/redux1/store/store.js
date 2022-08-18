import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../reducer/counterslice";

export default configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
