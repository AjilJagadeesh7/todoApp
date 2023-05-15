import constate from "constate";
import { useState } from "react";

const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (text) => {
    if (text) {
      const newTodo = {
        title: text,
        id: todoList.length + 1,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
    }
  };
  const toggleCompleted = (id) => {
    if (id) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };

  return { todoList, addTodo, toggleCompleted };
};

export const [TodoListProvider, useTodoConstate] = constate(useTodo);
