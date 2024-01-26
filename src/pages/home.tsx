import styled from "styled-components";

function Home() {
  return (
    <Container>
      Home<h1>Award-winning custom designs and digital branding solutions</h1>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button>Learn more</button>
    </Container>
  );
}
const Container = styled.div`
  background-color: #ff8800;
  margin: 20px;
  padding: 20px;
  color: white;
`;

export default Home;
