import styles from './app.module.css'

function App() {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <img src="/icons/authentication.png" alt="" className={styles.img} />
        <div className={styles.credential}>
          <div className={styles.alignVertical}>
            <label htmlFor="email">Email</label>
            <input className={styles.input} id="email" type="email" />
          </div>
          <div className={styles.alignVertical}>
            <label htmlFor="password">Password</label>
            <input className={styles.input} id="password" type="password" />
          </div>
          <button className={styles.btn}>Sign In</button>
        </div>
      </article>
    </div>
  )
}

export default App
