import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'src/components';
import { Home, UpcomingMovie } from 'src/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/upcoming-movie',
        element: <UpcomingMovie />
      }
    ]
  }
]);
