function Home() {
  const anotherValue = 10
  // Object
  const person = {
    randomValue: {
      newValue: 'Hello React',
    },
    anotherValue: 20,
  }

  // Object destructuring
  const {
    anotherValue: diffValue,
    randomValue: { newValue },
  } = person

  // const { newValue } = randomValue

  // You can only write javascript expression in JSX location
  return <div>{diffValue}</div>
}

export default Home
