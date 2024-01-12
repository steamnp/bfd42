import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Initial run -> render
  // Again run -> re-render

  // statement
  // if(email) {
  //   ''
  // } else {
  //   styles.errorBorder
  // }

  // expression
  // ternary operator
  // email ? styles.errorBorder : ''

  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <img src="/icon/authentication(1).png" alt="" className={styles.img} />
        <div className={styles.credential}>
          <div className={styles.alignVertical}>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              id="email"
              type="email"
            />
          </div>
          <div className={styles.alignVertical}>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.input} ${
                password.length >= 8 ? "" : styles.errorBorder
              }`}
              id="password"
              type="password"
            />
            {password.length >= 8 ? (
              ""
            ) : (
              <small className={styles.error}>
                Your password is less than 8 characters
              </small>
            )}
          </div>
          <button className={styles.btn}>Sign In</button>
        </div>
      </article>
    </div>
  );
}

export default App;
