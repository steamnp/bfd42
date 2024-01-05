function App() {
  function handleClick() {
    console.log("You clicked");
  }
  return <div onClick={handleClick}>Hello</div>;
}

export default App;
