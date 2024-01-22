import { FooterContainer, FooterLogo, FooterLogoLink, FooterLogoWrap, FooterLowerSection, FooterMenu, FooterMenuItem, FooterMenuItems, FooterUpperSection, FooterWrap, HorizontalLine } from "./footer.style"
import { MenuData } from '../../types/styles'


export default function Footer({ data }: { data: MenuData }) {
  return (
    <FooterContainer>
     <FooterUpperSection>
        <FooterWrap>
          <FooterLogoWrap >
            <FooterLogoLink to={data.homeLink} aria-label={data.header.label}>
              <FooterLogo src={data.footer.footerLogo} alt={data.header.headerLogoAlt}></FooterLogo>
            </FooterLogoLink>
          </FooterLogoWrap>
          <FooterMenu>
           
            <FooterMenuItems >
              {data.menu.map((menu, index) => {
                return (
                  <FooterMenuItem key={index} to={menu.link} aria-label={menu.label}>
                    {menu.title}
                  </FooterMenuItem>
                )
              })}
            </FooterMenuItems>

            
          </FooterMenu>
        </FooterWrap>
        <HorizontalLine/>
        </FooterUpperSection>
        <FooterLowerSection>
          
        </FooterLowerSection>
    </FooterContainer>
  )
}