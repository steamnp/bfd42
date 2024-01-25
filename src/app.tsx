function App() {
  // How to get response from API url?
  // url: https://api.github.com/users

  // Asynchronous operation
  // Synchronous code

  console.log("before await");

  async function getUsers() {
    console.log("before await");

    await fetch("https://api.github.com/users");
    // Code below await is asynchronous code
    console.log("After await");
  }

  getUsers();

  console.log("after function");
  return <div>App</div>;
}

export default App;
