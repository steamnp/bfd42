import { createBrowserRouter } from 'react-router-dom';
import { Home, UpcomingMovie } from 'src/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/upcoming-movie',
    element: <UpcomingMovie />
  }
]);
