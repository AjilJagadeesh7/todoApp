import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodos = (state) => state.todos;
