import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../data/todoSlice";
import alertSlice from "../data/alertSlice";
const store = configureStore({
  reducer: {
    todos: todosReducer,
    alert: alertSlice,
  },
});

export default store;
