function App() {
  // How to get response from API url?
  // url: 'https://api.github.com/users'

  async function getUsers() {
    const output = await fetch('https://api.github.com/users')

    // Convert JSON response to JAVASCRIPT response
    const data = await output.json()

    console.log(data)
  }

  getUsers()

  return <div>App</div>
}

export default App
