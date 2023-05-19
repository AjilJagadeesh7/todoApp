import { signal } from "@preact/signals-react";

export const todoList = signal([]);

export const addTodo = (text) => {
  const newTodo = {
    id: todoList.value?.length + 1,
    title: text,
    completed: false,
  };
  todoList.value = [...todoList.value, newTodo];
};

export const toggleCompleted = (id) => {
  const todoIndex = todoList.value.findIndex((todo) => todo.id === id);

  if (todoIndex !== -1) {
    const updatedTodoList = [...todoList.value];
    updatedTodoList[todoIndex].completed =
      !updatedTodoList[todoIndex].completed;
    todoList.value = updatedTodoList;
  }
};
