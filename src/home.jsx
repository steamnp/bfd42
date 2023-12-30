function Home() {
  // typeof myName -> string
  const myName = 'Gorakh'

  // typeof myFavNum -> number
  const myFavNum = 10.01
  let age = 20

  // Array
  // typeof myFavNumbers -> object (Array)
  const myFavNumbers = [10, 20, 30]
  const anotherArray = [10, 20, 30]

  // typeof participant -> object
  const participant = {
    name: 'Rajiv',
    favNumber: 7,
  }

  // typeof randomValue -> undefined
  let randomValue

  // typeof anotherValue -> object
  const anotherValue = null

  // typeof isProductAvailable -> boolean
  const isProductAvailable = false

  const numberOne = 10
  const numberTwo = 20

  // Truthy Values

  // Falsy values
  // false, undefined, 0, '', null, NaN

  // conditional statement
  if (numberOne > numberTwo) {
    console.log('I am truthy value!')
  } else {
    console.log('I am a falsy value!')
  }

  return <div>{typeof myFavNumbers}</div>
}

export default Home
