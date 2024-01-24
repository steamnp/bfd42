import { useEffect, useState } from 'react' // Synchronous code

function App() {
  // Synchronous code
  const [users, setUsers] = useState() // Synchronous code

  async function getUsers() {
    // Synchronous code
    const output = await fetch('https://api.github.com/users') // Synchronous code
    const data = await output.json() // Asynchronous code
    setUsers(data) // Asynchronous code
    // Line 11 is updating the state
    // Whenever state updated in App, the App will re-render
  }

  useEffect(() => {
    getUsers() // Synchronous code
  }, [])

  console.log(users)

  return <div>App</div> // Synchronous code
}

export default App // Synchronous code
