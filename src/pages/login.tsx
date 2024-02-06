import { useState } from "react";
import { Form } from "./login.style";

interface IUser {
email: string;
password: string;
}

const Login = () => {
  const [inputs, setInputs] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setInputs({...inputs, 
       [event.target.name]:event.target.value})
  }

  const handleSumbit = () =>{
    alert('submitted')
  }
  
  return (
    <Form onSubmit = {handleSumbit}>
      <label htmlFor="email">User Email</label>
      <input type="email" name="email" id="email" required onChange = {handleChange}/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required onChange ={handleChange}/>
      <button>Login</button>
    </Form>
  );
};

export default Login;
