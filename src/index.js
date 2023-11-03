import "./index.css";
import Counter from "./Components/Counter";
import ReactDOM from "react-dom/client";

import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
