import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <img className={styles.img} src="/icons/profile_pic.jpg" alt="" />
        <div className={styles.credential}>
          <div className={styles.alignVertical}>
            <label htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.alignVertical}>
            <label htmlFor="password">Password:</label>
            <input
              className={`${styles.input} ${
                password.length > 8 ? "" : styles.errorBorder
              }`}
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length >= 8 ? (
              ""
            ) : (
              <small className={styles.error}>
                Your password is less than 8 characters.
              </small>
            )}
          </div>
          <button className={styles.btn}>Sign In</button>
        </div>
      </article>
    </div>
  );
  return <div>App</div>;
}

export default App;
