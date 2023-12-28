import styles from "./App.module.css";

function App() {
  // console.log("App");
  // this is the location to write js code
  // 1. create variable and assign value to it
  // const myName = "Rajip";
  // let myName = "Gorakh";
  // myName = "Jayanti";

  // const myCountry = "Nepal"

  let age = 30;
  age = 31;
  age = 32;

  // console.log("Test");

  // how to create function in JS
  // 3 ways to create function in JS
  //  1. Function Declaration
  // (-> Parameter/paranthesis)
  function getAge(birthDate) {
    // console.log(age);
    return 2023 - birthDate;
  }

  // console.log("Greetings");

  // call/invoke/run function getAge
  const result = getAge(1997);
  const myAge = getAge(2000);

  console.log(myAge);
  // getAge(1997 -> Argument)

  return <main className={StyleSheet.box}>{myAge}</main>;
}

export default App;
