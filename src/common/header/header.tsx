import { HeaderContainer, HeaderWrap, HeaderLogoWrap, HeaderLogoLink, HeaderLogo, HeaderMenu, HeaderMenuItems, HeaderMenuItem, MobileNav, HeaderMobileNav, Hamburger } from './header.style'
import { MenuData } from '../../types/styles'
import { useState } from 'react'
import HamburgerMenu from '../social logos/hamburgerMenu';

const Header = ({ data }: { data: MenuData }) => {
  const [openNav, setOpenNav] = useState (false);

  const handleNav = () => {
    setOpenNav(!openNav)

  }
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogoWrap >
            <HeaderLogoLink to={data.homeLink} aria-label={data.header.label}>
              <HeaderLogo src={data.header.headerLogo} alt={data.header.headerLogoAlt}></HeaderLogo>
            </HeaderLogoLink>
          </HeaderLogoWrap>
          <HeaderMenu>
           
            <HeaderMenuItems $navOpen={openNav}>
              {data.menu.map((menu, index) => {
                return (
                  <HeaderMenuItem key={index} to={menu.link} aria-label={menu.label}>
                    {menu.title}
                  </HeaderMenuItem>
                )
              })}
            </HeaderMenuItems>

            
            <HeaderMobileNav onClick = {handleNav}>
              <Hamburger>
            <HamburgerMenu/>
            </Hamburger>
            </HeaderMobileNav>
          </HeaderMenu>
        </HeaderWrap>
      </HeaderContainer>
     
    </>
  )
}

export default Header
