import styles from './app.module.css'

console.log(styles)

function App() {
  function handleClick() {
    console.log('You clicked!')
  }

  function handleChangeEmail() {
    console.log('You typed something in email field!')
  }

  function handleChangePassword() {
    console.log('You typed something in password field!')
  }

  return (
    <div className={`${styles.wrapper} ${styles.test}`}>
      <div className={styles.container}>
        <input onChange={handleChangeEmail} placeholder="email" type="text" />
        <input onChange={handleChangePassword} placeholder="password" type="password" />
      </div>
      <div className={styles.btn}>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  )
}

export default App

// How to use events in JSX
// What are some popular event?
// what is the syntax for event name in HTML and JSX? -> Are they same?
// HTML -> onchange, onclick
// JSX -> onChange, onClick

// What is the value type for event prop in JSX?
// function -> callback function

// If you have function written outside, how to use with events?
// handleClick() x
// handleClick
