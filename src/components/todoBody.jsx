import React from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
import Alert from "./errorAlert";

import { showAlert, toggleAlert } from "../store/alertStore";
import { effect } from "@preact/signals-react";

const TodoBody = () => {
  effect(() => {
    if (showAlert.value) {
      setTimeout(() => {
        toggleAlert(false);
      }, 5000);
    }
  });

  return (
    <>
      <div className="h-[50%] w-[40%] bg-slate-700 p-10 rounded-xl text-white shadow-lg drop-shadow-xl shadow-slate-900">
        <TodoInput />
        <TodoList />
      </div>
      {showAlert.value ? (
        <Alert errorMessage="Cannot submit empty todo" />
      ) : null}
    </>
  );
};

export default TodoBody;
