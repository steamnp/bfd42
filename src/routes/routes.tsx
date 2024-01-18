import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'
import { GlobalStyles } from '../style/global-style'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <GlobalStyles />
        <div>Header</div>
        <Outlet />
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
