import React, { useContext, useEffect } from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
import Alert from "./errorAlert";
import { AlertContext } from "../contexts/alertContext";

const TodoBody = () => {
  const { showAlert, toggleAlert } = useContext(AlertContext);
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        toggleAlert(false);
      }, 5000);
    }
  }, [showAlert]);

  return (
    <div className="h-[50%] w-[40%] bg-slate-700 p-10 rounded-xl text-white shadow-lg drop-shadow-xl shadow-slate-900">
      <TodoInput />
      <TodoList />
      {showAlert ? <Alert errorMessage="Cannot submit empty todo" /> : null}
    </div>
  );
};

export default TodoBody;
