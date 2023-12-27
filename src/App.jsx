import styles from "./App.module.css";

function App() {
  // 1. Create variable and assign value to it
  const myName = "Pemba";
  return <main className={styles.box}>{myName}</main>;
}

export default App;
