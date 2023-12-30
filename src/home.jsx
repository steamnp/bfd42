function Home() {
  // Object
  const person = {
    randomValue: {
      newValue: "Hello React",
    },
    anotherValue: 100,
  };

  // Object destructuring
  const {
    randomValue: { newValue },
    anotherValue,
  } = person;
  //const { newValue } = randomValue;

  const arr = [10, 20];

  return (
    <>
      <div>{person.anotherValue}</div>
      {/* <div>{person.randomValue}</div> */}
      <div>{newValue}</div>
      <div>{arr}</div>
      <div>{arr[1]}</div>
    </>
  );
}

export default Home;
