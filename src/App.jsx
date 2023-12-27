import styles from "./App.module.css";

// can also write js code in this location ( not sutible, better to write in function)

function App() {
  //this the location to write js code
  const myName = "Aadam";

  return <main className={style.box}>{myName}</main>;
}

export default App;
