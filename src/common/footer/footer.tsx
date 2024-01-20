import {
  FooterContainer,
  FooterWrap,
  FooterLogoWrap,
  FooterLogoLink,
  FooterLogo,
  FooterMenu,
  FooterMenuItems,
  FooterMenuItem,
} from "./footer.style";
import { MenuData } from "../../types/styles";

const Footer = ({ data }: { data: MenuData }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLogoWrap>
            <FooterLogoLink to={data.homeLink} aria-label={data.footer.label}>
              <FooterLogo
                src={data.footer.footerLogo}
                alt={data.footer.footerLogoAlt}
              ></FooterLogo>
            </FooterLogoLink>
          </FooterLogoWrap>
          <FooterMenu>
            <FooterMenuItems $navOpen={false}>
              {data.menu.map((menu, index) => {
                return (
                  <FooterMenuItem
                    key={index}
                    to={menu.link}
                    aria-label={menu.label}
                  >
                    {menu.title}
                  </FooterMenuItem>
                );
              })}
            </FooterMenuItems>
          </FooterMenu>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
