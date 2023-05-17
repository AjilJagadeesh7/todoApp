import { Provider } from "react-redux";
import TodoBody from "./components/todoBody";
import { AlertConstateProvider } from "./contexts/alertConstate";
import store from "./store/reduxStore";
// import { TodoListProvider } from "./contexts/todoConstate";

function App() {
  return (
    <AlertConstateProvider>
      {/* <TodoListProvider> */}
      <Provider store={store}>
        <div className="flex justify-center h-screen items-center bg-slate-800">
          <TodoBody />
        </div>
      </Provider>
      {/* </TodoListProvider> */}
    </AlertConstateProvider>
    // <AlertProvider>
    //    <TodoProvider>
    //   </TodoProvider>
    //  </AlertProvider>
  );
}

export default App;
