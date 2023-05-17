import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../data/todoSlice";
import { changeAlert, toggleAlert } from "../data/alertSlice";

const TodoInput = () => {
  const dispatch = useDispatch();
  const textRef = useRef(null);

  const handleAddTodo = () => {
    if (textRef.current.value.length > 0) {
      dispatch(
        changeAlert({
          message: "Successfully added todo",
          type: "success",
        })
      );
      dispatch(toggleAlert(true));

      dispatch(addTodo(textRef.current.value));
    } else {
      dispatch(
        changeAlert({
          message: "Cannot add todo when field is empty",
          type: "error",
        })
      );
      dispatch(toggleAlert(true));
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
