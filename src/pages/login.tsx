import React, { useState } from "react";
import styled from "styled-components";

interface IUser {
  email: string;
  password: string;
}

const Form = styled.form`
  /* Add your styling here */
`;

const Login = () => {
  const [inputs, setInputs] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("submitted");
    // Add your form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="email">User Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        onChange={handleChange}
        value={inputs.email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        onChange={handleChange}
        value={inputs.password}
      />
      <button type="submit">Login</button>
    </Form>
  );
};

export default Login;
