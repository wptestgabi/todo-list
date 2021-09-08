import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import statusReducer from "./statusSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    status: statusReducer,
  },
});
