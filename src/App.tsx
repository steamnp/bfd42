import { useState } from 'react'
import styles from './app.module.css'

function App() {
  const [, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Short circuiting (Logical OR -> || , logical AND -> &&)

  // || -> looking for truthy value -> Short circuit at truthy value
  // && -> looking for falsy value -> false, undefined, null, NaN, 0, '' -> Short circuit at falsy value

  const testVariableOne = 'Pemba' || 'Sapna'
  // testVariableOne -> 'Pemba'

  const testVariableTwo = 'Pemba' && 'Sapna'
  // testVariableTwo -> 'Sapna'

  const testVariableThree = 1 && true && [1, 2, 3] && 'Nepal'
  // testVariableThree -> 'Nepal'

  const testVariableFour = 1 || true || [1, 2, 3] || 'Nepal'
  // testVariableFour -> 1

  const testVariableFive = '' || NaN || [1, 2, 3] || false
  // testVariableFive ->

  const testVariableSix = '' && NaN && [1, 2, 3] && false
  // testVariableSix -> ''

  // >, <, >=, <= -> true or false

  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <img src="/icons/authentication.png" alt="" className={styles.img} />
        <div className={styles.credential}>
          <div className={styles.alignVertical}>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className={styles.input} id="email" type="email" />
          </div>
          <div className={styles.alignVertical}>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className={`${styles.input} ${password.length >= 8 ? '' : styles.errorBorder}`} id="password" type="password" />
            {password.length >= 8 || <small className={styles.error}>Your password is less than 8 characters</small>}
          </div>
          <button className={styles.btn}>Sign In</button>
        </div>
      </article>
    </div>
  )
}

export default App
