import { createContext, useState } from "react";

export const TodoContext = createContext({
  todoList: [],
  addTodo: () => {},
  toggleCompleted: () => {},
});

const TodoProvider = ({ children }) => {
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
  const value = {
    todoList,
    addTodo,
    toggleCompleted,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
