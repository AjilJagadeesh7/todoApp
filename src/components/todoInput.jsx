import { useContext, useRef } from "react";
import { TodoContext } from "../contexts/todoContext";
import { AlertContext } from "../contexts/alertContext";

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext);
  const { toggleAlert, changeAlert } = useContext(AlertContext);
  const textRef = useRef(null);

  const handleAddTodo = () => {
    if (textRef.current.value.length > 0) {
      changeAlert({
        message: "Successfully added todo",
        type: "success",
      });
      toggleAlert(true);
      addTodo(textRef.current.value);
    } else {
      changeAlert({
        message: "Cannot add todo when field is empty",
        type: "error",
      });
      toggleAlert(true);
    }
    textRef.current.value = "";
  };
  return (
    <div>
      <input
        className="input w-full max-w-xs"
        ref={textRef}
        type="text"
        onKeyDown={(e) => e.code === "Enter" && handleAddTodo()}
        placeholder="Enter todo"
      />
      <button className="btn btn-primary mt-2 w-full" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
