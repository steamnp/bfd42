function App() {
  console.log("Before function");

  async function getUsers() {
    const output = fetch("https://api.github.com/users");
    console.log(output);
  }
  getUsers();
  return <div>App</div>;
}

export default App;
