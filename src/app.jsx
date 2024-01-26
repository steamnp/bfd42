import styles from "./app.module.css";

console.log(styles);

function App() {
  function handleClick() {
    console.log("You Clicked!");
  }

  function handleChangeEmail() {
    console.log("You typed something in email field!");
  }

  function handleChangePassword() {
    console.log("You typed something in password field!");
  }
  return (
    <div className={styles.wrapper}>
      <div className={"$styles.container} ${styles.test}"}>
        <input onChange={handleChangeEmail} placeholder="email" type="text" />
        <input
          onChange={handleChangePassword}
          placeholder="password"
          type="password"
        />
      </div>
      <div className={styles.btn}>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}
export default App;
