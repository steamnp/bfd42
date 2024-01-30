import {
  Box,
  Container,
  SectionLeft,
  SectionRight,
  Image,
  SectionLeftHeader,
  Paragraph,
  Button,
  MidSection,
  ImageWebDesign,
  ImageAppDesign,
  ImageGraphicDesign,
  MidLeftBox,
  MidRightBox,
} from "./home.style";
import mobile from "../../assets/images/home/desktop/desktop-hero-image.png";
import webDesign from "../../assets/images/home/desktop/image-web-design-large.jpg";
import appDesign from "../../assets/images/home/desktop/image-app-design.jpg";
import graphicDesign from "../../assets/images/home/desktop/image-graphic-design.jpg";
function Home() {
  return (
    <Container>
      <Box>
        <SectionLeft>
          <SectionLeftHeader>
            Award-winning custom designs and digital branding solutions
          </SectionLeftHeader>
          <Paragraph>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </Paragraph>
          <Button>LEARN MORE</Button>
        </SectionLeft>
        <SectionRight>
          <Image src={mobile}></Image>
        </SectionRight>
      </Box>
      <MidSection>
        <MidLeftBox>
        <ImageWebDesign src = {webDesign}></ImageWebDesign>
        </MidLeftBox>
        <MidRightBox>
        <ImageAppDesign src = {appDesign}></ImageAppDesign>
        <ImageGraphicDesign src = {graphicDesign}></ImageGraphicDesign>

        </MidRightBox>
       
      </MidSection>

     
    </Container>
  );
}

export default Home;
