import { HeaderContainer, HeaderWrap, HeaderLogoWrap, HeaderLogoLink, HeaderLogo, HeaderMenu, HeaderMenuItems, HeaderMenuItem } from './header.style'
import { MenuData } from '../../types/styles'

const Header = ({ data }: { data: MenuData }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogoWrap>
            <HeaderLogoLink to={data.homeLink} aria-label={data.header.label}>
              <HeaderLogo src={data.header.headerLogo} alt={data.header.headerLogoAlt}></HeaderLogo>
            </HeaderLogoLink>
          </HeaderLogoWrap>
          <HeaderMenu>
            <HeaderMenuItems $navOpen={false}>
              {data.menu.map((menu, index) => {
                return (
                  <HeaderMenuItem key={index} to={menu.link} aria-label={menu.label}>
                    {menu.title}
                  </HeaderMenuItem>
                )
              })}
            </HeaderMenuItems>
          </HeaderMenu>
        </HeaderWrap>
      </HeaderContainer>
    </>
  )
}

export default Header
