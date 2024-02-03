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
  LowerMidSection,
  Cards,
  CardSectionTop,
  CardSectionBottom,
  HeaderCard,
} from "./home.style";
import mobile from "../../assets/images/home/desktop/desktop-hero-image.png";
import webDesign from "../../assets/images/home/desktop/image-web-design-large.jpg";
import appDesign from "../../assets/images/home/desktop/image-app-design.jpg";
import graphicDesign from "../../assets/images/home/desktop/image-graphic-design.jpg";
import PassionateImage from "./assetsHome/passionate";
import ResourcefulImage from "./assetsHome/resourceful";
import FriendlyImage from "./assetsHome/friendly";
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

     <LowerMidSection>
      <Cards>
       <CardSectionTop>
        <PassionateImage/>
        </CardSectionTop> 
       <CardSectionBottom>
       <HeaderCard> </HeaderCard>
       </CardSectionBottom>

      </Cards>

      <Cards>
       <CardSectionTop>
        <ResourcefulImage/>
        </CardSectionTop> 
       <CardSectionBottom>
       <HeaderCard> </HeaderCard>
       </CardSectionBottom>

      </Cards>

      <Cards>
       <CardSectionTop>
        <FriendlyImage/>
        </CardSectionTop> 
       <CardSectionBottom>
        <HeaderCard> </HeaderCard>
       </CardSectionBottom>

      </Cards>
      
     </LowerMidSection>
    </Container>
  );
}

export default Home;
