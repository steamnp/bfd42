import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import UpcomingMovie from './pages/upcoming-movies/upcoming-movies.tsx';
import NotFound from './pages/not-found/not-found.tsx';
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
