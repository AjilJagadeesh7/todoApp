import { useTodoConstate } from "../contexts/todoConstate";

const TodoList = () => {
  /*
    Use this with regular context
    const { todoList, toggleCompleted } = useContext(TodoContext);
  */
  const { todoList, toggleCompleted } = useTodoConstate();
  return (
    <div>
      {todoList.length > 0 ? (
        <div className="overflow-y-auto  h-[17rem] my-5">
          {todoList.map((item, key) => (
            <li
              onClick={() => toggleCompleted(item.id)}
              className={`whitespace-normal break-words ${
                item.completed ? "line-through" : ""
              }`}
              key={key}
            >
              {item.title}
            </li>
          ))}
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
