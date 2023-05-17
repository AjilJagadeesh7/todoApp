import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../data/todoSlice";
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
