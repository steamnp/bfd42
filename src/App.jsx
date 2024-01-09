import "./global.css";
import styles from "./styles.module.css";

function App() {
  function handleClick() {
    console.log("You clicked!");
  }

  function handleChange() {
    console.log("You clicked!");
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.headerLogo}>
          <img src="img/header_image.png" alt="user logo" />
        </div>

        <div className={styles.userEmail}>
          <p>Email</p>
          <input
            className={styles.emailInput}
            onChange={handleChange}
            type="text"
          />
        </div>

        <div className={styles.userPassword}>
          <p>Password</p>
          <input
            className={styles.passwordInput}
            onChange={handleChange}
            type="password"
          />
        </div>

        <div className={styles.userSignIn}>
          <button className={styles.signinButton} onClick={handleClick}>
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
