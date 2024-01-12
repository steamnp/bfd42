import React from "react";
import styles from "./app.module.css";

function App() {
  function handleClick() {
    console.log("Sign In button inputed");
  }

  function handleChangeEmail() {
    console.log("Email field input");
  }

  function handleChangePassword() {
    console.log("Password field input");
  }

  function handleForgotUsername() {
    console.log("Forgot Username button clicked");
  }

  function handleForgotPassword() {
    console.log("Forgot Password button clicked");
  }

  return (
    <div className={styles.containerForCSS}>
      <input
        onChange={handleChangeEmail}
        placeholder="Email/Username"
        type="text"
        id="inputEmail"
      />
      <input
        onChange={handleChangePassword}
        placeholder="password"
        type="password"
        id="inputPassword"
      />
      <button onClick={handleClick}>Sign In</button>
      <button onClick={handleForgotPassword}>Forgot Password</button>
      <button onClick={handleForgotUsername}>Forgot Username</button>
    </div>
  );

  return <div className={styles.centerButton}></div>;
}
export default App;
