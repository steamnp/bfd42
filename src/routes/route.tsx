import { Outlet, createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact";
import Services from "../pages/services";
import Header from "../common/header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
