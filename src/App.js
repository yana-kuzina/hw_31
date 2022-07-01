import { Provider } from "react-redux";

import store from "./store";

import InvestmantCard from "./components/InvestmantCard";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div>Hello Redux!</div>

      <InvestmantCard />

      <TodoList />
    </Provider>
  );
}

export default App;
