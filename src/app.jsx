import styles from './app.module.css'

function App() {
  const names = ['Alex', 'Adam', 'Nima']
  return (
    <div>
      {names.map(function (el, i) {
        return (
          <div className={styles.name} key={i}>
            {el}
          </div>
        )
      })}
    </div>
  )
}

export default App
