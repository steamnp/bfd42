import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState(0)
  console.log('Before useEffect Hook')

  // Get/fetch data from database
  useEffect(() => {
    console.log('I am running at the end!')
  })

  // API

  // Whenever state changes in Component, the Component will re-render

  return (
    <div>
      <button
        onClick={() => {
          // setUsers()
        }}
      >
        Get Users
      </button>
    </div>
  )
}

export default App
