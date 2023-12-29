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

  return <div>{typeof myFavNumbers}</div>
}

export default Home
