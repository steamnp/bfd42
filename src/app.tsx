function App() {
  // How to get response from API url?
  // url: https://api.github.com/users

  // Asynchronous Code
  // Synchronous Code

  console.log('Before function')

  async function getUsers() {
    console.log('Before await!')

    const data = await fetch('https://api.github.com/users')
    // code below await is Asynchronous code
    console.log('After await!')

    // const response = data
  }

  getUsers()

  // javascript has one location to run the code (thread -> call stack)

  // Blocking code
  // for (let i = 0; i < 100000; i++) {
  //   console.log('for loop is running!')
  // }

  console.log('After function')

  return <div>App</div>
}

export default App
