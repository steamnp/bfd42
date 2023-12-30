function Home() {
  const person = {
    randomValue: {
      newValue: "Hello React",
    },
    anotherValue: 20,
  };
  return <div>{person.anotherValue}</div>;
}

export default Home;
