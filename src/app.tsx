import { useSelector } from 'react-redux'

function App() {
  const output = useSelector((state) => state)
  console.log(output)

  return <div>App</div>
}

export default App
