import styled from "styled-components";

function OurCompany() {
  return (
    <Container>
      Our Company
      <h1>About Us</h1>
      <p>
        Founded in 2010, we are a creative agency that produces lasting results
        for our clients. We’ve partnered with many startups, corporations, and
        nonprofits alike to craft designs that make real impact. We’re always
        looking forward to creating brands, products, and digital experiences
        that connect with our clients' audiences.
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: red;
  margin: 20px;
  padding: 20px;
  color: white;
`;
export default OurCompany;
