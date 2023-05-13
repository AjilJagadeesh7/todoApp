import TodoProvider from "./contexts/todoContext";
import AlertProvider from "./contexts/alertContext";
import TodoBody from "./components/todoBody";

function App() {
  return (
    <AlertProvider>
      <TodoProvider>
        <div className="flex justify-center h-screen items-center bg-slate-800">
          <TodoBody />
        </div>
      </TodoProvider>
    </AlertProvider>
  );
}

export default App;
