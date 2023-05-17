import React, { useEffect } from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
import Alert from "./errorAlert";
import { useDispatch, useSelector } from "react-redux";
import { selectShowAlert, toggleAlert } from "../data/alertSlice";

const TodoBody = () => {
  const showAlert = useSelector(selectShowAlert);
  const dispatch = useDispatch();
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(toggleAlert(false));
      }, 5000);
    }
  }, [showAlert]);

  return (
    <>
      <div className="h-[50%] w-[40%] bg-slate-700 p-10 rounded-xl text-white shadow-lg drop-shadow-xl shadow-slate-900">
        <TodoInput />
        <TodoList />
      </div>
      {showAlert ? <Alert errorMessage="Cannot submit empty todo" /> : null}
    </>
  );
};

export default TodoBody;
