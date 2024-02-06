import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import store from "./redux/store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
