import { Box, Container, SectionLeft, SectionRight, Image, SectionLeftHeader, Paragraph, Button } from "./home.style"
import mobile from '../../assets/images/home/desktop/desktop-hero-image.png'
function Home() {
  return <Container>
<Box>
  <SectionLeft>
    <SectionLeftHeader>
     Award-winning custom
      designs and digital
      branding solutions
    </SectionLeftHeader>
    <Paragraph>
      With over 10 years in the industry, we are experienced in
      creating fully responsive websites, app design, and engaging 
      brand experiences. Find out more about our services.
    </Paragraph>
   <Button>LEARN MORE</Button> 
  </SectionLeft>
  <SectionRight>
    <Image src = {mobile}>
   
       </Image>
  </SectionRight>
</Box>
  </Container>
}

export default Home
