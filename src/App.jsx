import styles from "./App.module.css";
function App() {
  //const myName = "Sapna";
  let age = 30;
  age = 31;
  console.log("Test");
  function getAge(birthDate) {
    // console.log(age);
    return 2023 - birthDate;
  }
  // getAge(30);
  const myAge = getAge(1993);
  return <main classname={styles.box}>{myAge}</main>;
}

export default App;
