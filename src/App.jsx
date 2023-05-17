import { Provider } from "react-redux";
import TodoBody from "./components/todoBody";
import { AlertConstateProvider } from "./contexts/alertConstate";
import store from "./store/reduxStore";

function App() {
  return (
    <AlertConstateProvider>
      <Provider store={store}>
        <div className="flex justify-center h-screen items-center bg-slate-800">
          <TodoBody />
        </div>
      </Provider>
    </AlertConstateProvider>
  );
}

export default App;
