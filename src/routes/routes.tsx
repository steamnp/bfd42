import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Store from "../pages/store";
import Contact from "../pages/contact";
import Header from "../common/header.tsx";
import Services from "../pages/services";
import Footer from "../common/footer";

// Dry - do not repeat yourself
// outlet
// named export
export const router = createBrowserRouter([
  {
    path: "/", // forward slash means home page
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
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
