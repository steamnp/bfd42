import {
  Box,
  BoxSecond,
  Container,
  Image,
  Paragraph,
  SectionLeft,
  SectionLeftHeader,
  SectionRight,
  BoxSecondLeftSection,
  BoxSecondRightSection,
  BoxThird,
  Cards,
  CardSectionTop,
  CardSectionMid,
  CardSectionBottom,
  BoxBottom,
  BottomLeftSection,
  BottomRightSection,
 
} from "./our-company.style";
import HeroImage from "../../assets/images/about/desktop/image-about-hero.jpg";
import ImageWorldClassTalent from "../../assets/images/about/desktop/image-world-class-talent.jpg";
import CanadaImage from "./assetsOur-company/canada";
import AustraliaImage from "./assetsOur-company/australia";
import UnitedKingdomImage from "./assetsOur-company/united-kingdom";
import ImageRealDeal from "../../assets/images/about/desktop/image-real-deal.jpg"

function OurCompany() {
  return (
    <Container>
      <Box>
        <SectionLeft>
          <SectionLeftHeader>About Us</SectionLeftHeader>
          <Paragraph>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </Paragraph>
        </SectionLeft>
        <SectionRight>
          <Image src={HeroImage}></Image>
        </SectionRight>
      </Box>
      <BoxSecond>
        <BoxSecondLeftSection
          src={ImageWorldClassTalent}
        ></BoxSecondLeftSection>
        <BoxSecondRightSection></BoxSecondRightSection>
      </BoxSecond>
      <BoxThird>
        <Cards>
          <CardSectionTop>
            <CanadaImage />
          </CardSectionTop>
          <CardSectionMid>Canada</CardSectionMid>
          <CardSectionBottom> SEE LOCATION </CardSectionBottom>
        </Cards>
        <Cards>
          <CardSectionTop>
            <AustraliaImage />
          </CardSectionTop>
          <CardSectionMid>Australia</CardSectionMid>
          <CardSectionBottom> SEE LOCATION </CardSectionBottom>
        </Cards>
        <Cards>
          <CardSectionTop>
            <UnitedKingdomImage />
          </CardSectionTop>
          <CardSectionMid>United Kingdom</CardSectionMid>
          <CardSectionBottom> SEE LOCATION </CardSectionBottom>
        </Cards>
      </BoxThird>
      <BoxBottom>
      
       <BottomLeftSection></BottomLeftSection>
       <BottomRightSection src = {ImageRealDeal}/>
       
      </BoxBottom>
    </Container>
  );
}

export default OurCompany;
