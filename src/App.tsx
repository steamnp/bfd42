function App() {
  console.log("Before function");

  async function getUsers() {
    console.log("Before Await");

    const data = await fetch("https://api.github.com/users");

    console.log("After await");
  }
  getUsers();
  return <div>App</div>;
}

export default App;
