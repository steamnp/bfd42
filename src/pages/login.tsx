import { Form } from "./login.style"


const Login = () => {
    


  return (
    <Form>
<label htmlFor="username">User Name</label>
<input type='email' name='username' id='username' required></input>
<label htmlFor="password">Password</label>
<input type='password' id = 'passord' required></input>
<button>Login</button>
</Form>
  )
}

export default Login