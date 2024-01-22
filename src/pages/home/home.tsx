import { Box, Container, SectionLeft, SectionRight, Image, SectionLeftHeader, Paragraph } from "./home.style"
import mobile from '../../assets/images/home/desktop/desktop-hero-image.png'
function Home() {
  return <Container>
<Box>
  <SectionLeft>
    <SectionLeftHeader>
      Award-winning custom
      <br/>
      designs and digital
      <br/>
      branding solutions
    </SectionLeftHeader>
    <Paragraph>
      With over 10 years in the industry, we are experienced in
      <br/>
      creating fully responsive websites, app design, and engaging 
      <br/>
      brand experiences. Find out more about our services.
    </Paragraph>
  </SectionLeft>
  <SectionRight>
    <Image src = {mobile}>
   
       </Image>
  </SectionRight>
</Box>
  </Container>
}

export default Home
