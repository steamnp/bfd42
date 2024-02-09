import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import UpcomingMovie from './pages/upcoming-movies/upcoming-movies.tsx';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/upcoming-movie',
    element: <UpcomingMovie />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
