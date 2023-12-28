import styles from './App.module.css'
// named import
// import { country } from './utils/test'

// default import
import country from './utils/test'

function App() {
  return <main className={styles.box}>{country}</main>
}

export default App
