import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../data/todoSlice";
import { changeAlert, toggleAlert } from "../data/alertSlice";

const TodoInput = () => {
  /*
    Use this with regular context
    const { addTodo } = useContext(TodoContext);
    const { toggleAlert, changeAlert } = useContext(AlertContext);
  */
  // const { addTodo } = useTodoConstate();
  // const { toggleAlert, changeAlert } = useAlertConstate();
  const dispatch = useDispatch();
  const textRef = useRef(null);

  const handleAddTodo = () => {
    if (textRef.current.value.length > 0) {
      // changeAlert({
      //   message: "Successfully added todo",
      //   type: "success",
      // });
      dispatch(
        changeAlert({
          message: "Successfully added todo",
          type: "success",
        })
      );
      dispatch(toggleAlert(true));
      // toggleAlert(true);
      // addTodo(textRef.current.value);
      dispatch(addTodo(textRef.current.value));
    } else {
      // changeAlert({
      //   message: "Cannot add todo when field is empty",
      //   type: "error",
      // });
      dispatch(
        changeAlert({
          message: "Cannot add todo when field is empty",
          type: "error",
        })
      );
      dispatch(toggleAlert(true));
      // toggleAlert(true);
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
