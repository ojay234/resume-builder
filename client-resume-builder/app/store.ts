import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./store/formSlice";

export default configureStore({
  reducer: {
    form: formSlice,
  },
});
