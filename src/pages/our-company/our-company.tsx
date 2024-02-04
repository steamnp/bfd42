import { Box, Container, Image, Paragraph, SectionLeft, SectionLeftHeader, SectionRight } from "./our-company.style";
import HeroImage from '../../assets/images/about/desktop/image-about-hero.jpg';

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
    </Container>
  );
}

export default OurCompany;
