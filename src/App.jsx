import styles from './App.module.css'

function App() {
  // console.log('App')
  // this is the location to write js code
  // 1. Create variable and assign value to it
  // const myName = 'Gorakh'
  // let myName = 'Gorakh'
  // myName = 'Jayanti'

  // const myCountry = 'Nepal'

  let age = 30
  age = 31
  age = 32

  // console.log('Test')

  // How to create function in JS
  // 3 ways to create function in JS
  // 1. Function Declaration
  // (-> Parameter)
  function getAge(birthDate) {
    // console.log(age)
    return 2023 - birthDate
  }

  // console.log('Greeting')

  // Call/invoke/run function getAge
  const myAge = getAge(1990)
  const anotherAge = getAge(1996)

  console.log(anotherAge)
  // getAge(1990 -> Argument)

  return <main className={styles.box}>{anotherAge}</main>
}

export default App

// where can we write JavaScript code ->.jsx, .js, .tsx, .ts
