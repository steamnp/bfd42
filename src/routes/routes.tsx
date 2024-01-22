import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/home'
import Contact from '../pages/contact/contact'
import { GlobalStyles } from '../style/global-style'
import Header from '../common/header/header'
import OurCompany from '../pages/our-company/our-company'
import Locations from '../pages/locations/locations'
import { menuData } from '../data/menu-data'
import Footer from '../common/footer/footer'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <GlobalStyles />
        <Header data={menuData} />
        <Outlet />
        <Footer/>
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
