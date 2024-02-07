import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
