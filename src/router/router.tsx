import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'src/components';
import { Home, UpcomingMovie } from 'src/pages';
// import PopMovieList from 'src/pages/movies/pop-movie-list';

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
        path: '/upcoming-movies',
        element: <UpcomingMovie />
      }
      // {
      //   path: '/movies',
      //   element: <PopMovieList />
      // }
    ]
  }
]);
