import { Provider } from "react-redux";
import TodoBody from "./components/todoBody";

import store from "./store/reduxStore";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center h-screen items-center bg-slate-800">
        <TodoBody />
      </div>
    </Provider>
  );
}

export default App;
