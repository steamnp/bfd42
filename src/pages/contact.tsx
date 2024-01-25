import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>
        Ready to take it to the next level? Let’s talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that’s relatable to your users, drop us a
        line.
      </p>
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" />

      <Label htmlFor="email">Email Address</Label>
      <Input type="email" id="email" />

      <Label htmlFor="phone">Phone number</Label>
      <Input type="tel" id="phone" />

      <Label htmlFor="message">Your message</Label>
      <TextArea id="message" />

      <Button>Submit</Button>
    </Container>
  );
}

const Container = styled.div`
  background-color: red;
  margin: 20px;
  padding: 20px;
  color: white;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
`;

export default Contact;
