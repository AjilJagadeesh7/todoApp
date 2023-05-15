import TodoBody from "./components/todoBody";
import { AlertConstateProvider } from "./contexts/alertConstate";
import { TodoListProvider } from "./contexts/todoConstate";

function App() {
  return (
    <AlertConstateProvider>
      <TodoListProvider>
        <div className="flex justify-center h-screen items-center bg-slate-800">
          <TodoBody />
        </div>
      </TodoListProvider>
    </AlertConstateProvider>
    // <AlertProvider>
    //    <TodoProvider>
    //   </TodoProvider>
    //  </AlertProvider>
  );
}

export default App;
