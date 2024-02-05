import { Box, Container, Image, Paragraph, SectionLeft, SectionLeftHeader, SectionRight, UpperMidBox, UpperMidLeftSection, UpperMidRightSection } from "./our-company.style";
import HeroImage from '../../assets/images/about/desktop/image-about-hero.jpg';
import ImageWorldClassTalent from '../../assets/images/about/desktop/image-world-class-talent.jpg'


function OurCompany() {
  return (
    <Container>
      <Box>
        <SectionLeft>
          <SectionLeftHeader>
            About Us
          </SectionLeftHeader>
          <Paragraph>
          Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.
          </Paragraph>
        </SectionLeft>
        <SectionRight>
          <Image src = {HeroImage}></Image>
        </SectionRight>
      </Box>
      <UpperMidBox>
<UpperMidLeftSection src ={ImageWorldClassTalent}></UpperMidLeftSection>
<UpperMidRightSection></UpperMidRightSection>
      </UpperMidBox>
    </Container>
  );
}

export default OurCompany;
