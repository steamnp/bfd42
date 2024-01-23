function Home() {
  const anotherValue = 10;
  // object
  const person = {
    randomValue: {
      newValue: "Hello React",
    },
    anotherValue: 20,
  };

  // Object destructuring
  const {
    anotherValue: diffValue,
    randomValue: { newValue },
  } = person;

  // const { newValue } = randomValue;

  // you can only write javascript expression in JSX location

  // input value name -> paramenters
  // object distructuring at parameter location
  function add({ numberTwo, numberOne, numberThree }) {
    return numberOne + numberTwo;
  }

  //real input value -> arguments
  // object literal as input
  add({ numberOne: 10, numberTwo: 20, numberThree: 40 });
  return <div>{diffValue}</div>;
}

export default Home;
