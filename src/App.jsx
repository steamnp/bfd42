import styles from './App.module.css'

function App() {
  // this is the location to write js code
  // 1. Create variable and assign value to it
  // const myName = 'Gorakh'
  // let myName = 'Gorakh'
  // myName = 'Jayanti'

  // const myCountry = 'Nepal'

  let age = 30
  age = 31
  age = 32

  return <main className={styles.box}>{age}</main>
}

export default App

// where can we write JavaScript code ->.jsx, .js, .tsx, .ts
