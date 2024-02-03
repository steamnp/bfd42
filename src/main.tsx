import ReactDOM from "react-dom/client";
import App from "./app";
import { MyContext } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MyContext.Provider value={0}>
    <App />
  </MyContext.Provider>
);
