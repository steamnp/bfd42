function App() {
  async function getUsers() {
    const output = await fetch("https://api.github.com/users");
    console.log(output);
  }

  getUsers();

  console.log("It is working");

  return <div>App</div>;
}

export default App;
