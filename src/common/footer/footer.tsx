import {
  AddressDiv,
  AddressDivHeader,
  AddressPara,
  FooterContainer,
  FooterDisplayBoard,
  FooterDisplayHeader,
  FooterLogo,
  FooterLogoLink,
  FooterLogoWrap,
  FooterLowerSection,
  FooterMenu,
  FooterMenuItem,
  FooterMenuItems,
  FooterUpperSection,
  FooterWrap,
  HorizontalLine,
  SectionLeftDisplyBoard,
  SectionRightDisplyBoard,
  SocialMediaLogo,
} from "./footer.style";
import { MenuData } from "../../types/styles";
import FacebookLogo from "../logos/facebook";
import TwitterLogo from "../logos/twitter";
import YoutubeLogo from "../logos/youtube";
import PineterestLogo from "../logos/pineterest";
import InstgramLogo from "../logos/instagram";

export default function Footer({ data }: { data: MenuData }) {
  return (
    <FooterContainer>
      <FooterDisplayBoard>
        <SectionLeftDisplyBoard>
         <FooterDisplayHeader> Lets talk about <br/> your project</FooterDisplayHeader>
        </SectionLeftDisplyBoard>
        <SectionRightDisplyBoard>
        
        </SectionRightDisplyBoard>
      </FooterDisplayBoard>
      <FooterUpperSection>
        <FooterWrap>
          <FooterLogoWrap>
            <FooterLogoLink to={data.homeLink} aria-label={data.header.label}>
              <FooterLogo
                src={data.footer.footerLogo}
                alt={data.header.headerLogoAlt}
              ></FooterLogo>
            </FooterLogoLink>
          </FooterLogoWrap>
          <FooterMenu>
            <FooterMenuItems>
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
      </FooterUpperSection>
      <HorizontalLine />
      <FooterLowerSection>
        <AddressDiv>
          <AddressDivHeader>Designo Central Office</AddressDivHeader>
          <AddressPara>3886 Wellingtion Street</AddressPara>
          <AddressPara>Toronto, Ontario M9C 3j5</AddressPara>
        </AddressDiv>
        <AddressDiv>
          <AddressDivHeader>Contact Us (Central Office)</AddressDivHeader>
          <AddressPara>P: +1 253-863-8967</AddressPara>
          <AddressPara>M: contact@designo.co</AddressPara>
        </AddressDiv>
        <SocialMediaLogo>
          <FacebookLogo />
          <YoutubeLogo />
          <TwitterLogo />
          <PineterestLogo />
          <InstgramLogo />
        </SocialMediaLogo>
      </FooterLowerSection>
    </FooterContainer>
  );
}
