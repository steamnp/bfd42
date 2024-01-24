function App() {
  console.log("Before function");

  async function getUsers() {
    const output = await fetch("https://api.github.com/users");
    const data = await output.json();
    console.log(data);
  }
  getUsers();
  return <div>App</div>;
}

export default App;
