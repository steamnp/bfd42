import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>Header</div>
        <Outlet />
        <div>Footer</div>
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
