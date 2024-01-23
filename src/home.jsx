function Home() {
  // object
  const person = {
    randomValue: {
      newValue: "Hello React",
    },
    anotherValue: 20,
  };

  // you can only write javascript expression in JSX location
  return <div>{person.randomValue.newValue}</div>;
}

export default Home;
