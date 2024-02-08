import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import UpcomingMovie from './pages/upcoming-movies/upcoming-movies.tsx';
import PopTVShowList from './pages/tv/tv-shows.tsx';
import { Provider } from 'react-redux';
import store from './redux/store/store'

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
    path: '/tvshows',
    element: <PopTVShowList/>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
