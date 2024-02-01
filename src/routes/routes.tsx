import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import Contact from "../pages/contact";
import Error from "../common/error";
import Header from "../common/header";
import Footer from "../common/footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <Error />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
