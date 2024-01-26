import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data) => setUsers(data)

  }, []);
  console.log(users)

//   async function getUsers() {
//     const output = await fetch("https://api.github.com/users");
//     const data = await output.json();
//     setUsers(data);
//   }
//   getUsers();
    return <div>{users.map(() =>{

    })}</div>;

}

export default App;
