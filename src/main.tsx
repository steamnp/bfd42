import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import UpcomingMovie from './pages/upcoming-movies/upcoming-movies.tsx';
import NotFound from './pages/not-found/not-found.tsx';
import PopTVShowList from './pages/t-v/shows.tsx';
import store from './redux/store/store.ts';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/upcoming-movie',
    element: <UpcomingMovie />
  },
  {
    path: '/not-found',
    element: <NotFound />
  },
  {
    path: '/tv-shows',
    element: <PopTVShowList />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
