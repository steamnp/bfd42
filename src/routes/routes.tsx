import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import Contact from "../pages/contact";

export const router = createBrowserRouter([
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);
