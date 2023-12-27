import styles from "./App.module.css";

function App() {
  let age = 30;
  age = 31;
  age = 32;

  return <main className={styles.box}>{age}</main>;
}

export default App;
