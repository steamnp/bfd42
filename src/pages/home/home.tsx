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
  ParagraphCard,
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
          <ImageWebDesign src={webDesign}></ImageWebDesign>
        </MidLeftBox>
        <MidRightBox>
          <ImageAppDesign src={appDesign}></ImageAppDesign>
          <ImageGraphicDesign src={graphicDesign}></ImageGraphicDesign>
        </MidRightBox>
      </MidSection>

      <LowerMidSection>
        <Cards>
          <CardSectionTop>
            <PassionateImage />
          </CardSectionTop>
          <CardSectionBottom>
            <HeaderCard> PASSIONATE </HeaderCard>
            <ParagraphCard>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </ParagraphCard>
          </CardSectionBottom>
        </Cards>

        <Cards>
          <CardSectionTop>
            <ResourcefulImage />
          </CardSectionTop>
          <CardSectionBottom>
            <HeaderCard>RESOURCEFUL</HeaderCard>
            <ParagraphCard>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </ParagraphCard>
          </CardSectionBottom>
        </Cards>

        <Cards>
          <CardSectionTop>
            <FriendlyImage />
          </CardSectionTop>
          <CardSectionBottom>
            <HeaderCard>FRIENDLY</HeaderCard>
            <ParagraphCard>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </ParagraphCard>
          </CardSectionBottom>
        </Cards>
      </LowerMidSection>
    </Container>
  );
}

export default Home;
