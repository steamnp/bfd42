import style from "./App.module.css";

function App() {
  //  this is the location to write js code
  // we can write js  to those file which has .jsx, .js, .tsx, .ts
  //Create variable and assign value to it
  const myName = "Nima";

  return <main classname={style.box}>{myName}</main>;
}

export default App;
