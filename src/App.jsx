import AlertProvider from "./contexts/alertContext";
import TodoBody from "./components/todoBody";
import { TodoListProvider } from "./contexts/todoConstate";

function App() {
  return (
    <AlertProvider>
      {/* <TodoProvider> */}
      <TodoListProvider>
        <div className="flex justify-center h-screen items-center bg-slate-800">
          <TodoBody />
        </div>
      </TodoListProvider>
      {/* </TodoProvider> */}
    </AlertProvider>
  );
}

export default App;
