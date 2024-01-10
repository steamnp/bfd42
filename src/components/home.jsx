import React, { useState } from "react";
import styles from './home.module.css'

export default function Home() {

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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (


    <div className={styles.container}>
      <article className={styles.card}>
        <img src ='src/assets/authentication.png' alt="" className={styles.img} />
        <div className={styles.credential}>
          <div className={styles.alignVertical}>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className={styles.input} id="email" type="email" />
          </div>
          <div className={styles.alignVertical}>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className={`${styles.input} ${password.length >= 8 ? '' : styles.errorBorder}`} id="password" type="password" />
            {password.length >= 8 ? '' : <small className={styles.error}>Your password is less than 8 characters</small>}
          </div>
          {password.length <= 8 ? <button disabled className={styles.btndisabled}>Sign In</button> : <button className={styles.btn}>Sign In</button>}
          
        </div>
      </article>
    </div>
  );
}
