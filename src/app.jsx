import { useState } from 'react'

// function add(a,b){
// }

// add(10, 20)

// const numbers = [10, 20, 30]

// const [numberOne] = numbers

function App() {
  console.log('Running')
  const [email, setEmail] = useState('')
  // email -> state variable
  // setEmail -> state updating function

  // Normal js variable
  // let email

  // state variable
  // hook

  // When state changes in React your component will render again

  return (
    <article>
      <label htmlFor="">Email</label>
      <input
        onChange={(e) => {
          //get typed input
          // email = e.target.value
          setEmail(e.target.value)
          console.log(email)
        }}
        type="text"
      />
      <h3>You typed: {email}</h3>
    </article>
  )
}

export default App
