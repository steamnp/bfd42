import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <img className={styles.img} src="./images/profile_pic.jpg" alt="" />
        <div className={styles.credential}>
          <div className={styles.alignVertical}>
            <label htmlFor="email">Email:</label>
            <input className={styles.input} type="email" id="email" />
          </div>
          <div className={styles.alignVertical}>
            <label htmlFor="password">Password:</label>
            <input className={styles.input} type="password" id="password" />
          </div>
          <button className={styles.btn}>Sign In</button>
        </div>
      </article>
    </div>
  );
}

export default App;
