import styles from "./App.module.css";
function App() {
  //const myName = "Sapna";
  let age = 30;
  age = 31;
  console.log("Test");
  function getAge() {
    console.log("Hello");
  }
  getAge();
  return <main classname={styles.box}>My age is {age}</main>;
}

export default App;
