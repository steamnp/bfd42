import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'
import { GlobalStyles } from '../style/global-style'
import Header from '../common/header/header'
import OurCompany from '../pages/our-company'
import Locations from '../pages/locations'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <GlobalStyles />
        <Header />
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
      {
        path: '/about',
        element: <OurCompany />,
      },
      {
        path: '/locations',
        element: <Locations />,
      },
    ],
  },
])
