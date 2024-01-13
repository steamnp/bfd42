import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import Contact from "../pages/contact";
import Header from "../common/header";
import Footer from "../common/footer";

// named export
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
    children: [
      {
        path: "/",
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
