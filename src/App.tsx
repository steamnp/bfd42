import { useState } from "react";
function App() {
  const [users, setUsers] = useState();

  async function getUsers() {
    const output = await fetch("https://api.github.com/users");
    const data = await output.json();
    setUsers(data);
  }
  getUsers();
  return <div>App</div>;
}

export default App;
