import { useDispatch, useSelector } from "react-redux";
import { selectTodos, toggleTodo } from "../data/todoSlice";

const TodoList = () => {
  /*
    Use this with regular context
    const { todoList, toggleCompleted } = useContext(TodoContext);
  */
  // const { todoList, toggleCompleted } = useTodoConstate();
  const todoList = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <div>
      {todoList.length > 0 ? (
        <div className="overflow-y-auto  h-[17rem] my-5">
          {todoList.map((item, key) => {
            console.log(item);
            return (
              <li
                onClick={() => {
                  // toggleCompleted(item.id)
                  dispatch(toggleTodo(item.id));
                }}
                className={`whitespace-normal break-words cursor-pointer ${
                  item.completed ? "line-through" : ""
                }`}
                key={key}
              >
                {item.title}
              </li>
            );
          })}
        </div>
      ) : (
        <div className="my-16 text-slate-600 text-xl text-center font-bold">
          Let's get organized! Add some tasks to start.
        </div>
      )}
    </div>
  );
};

export default TodoList;
