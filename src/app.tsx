import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/reducer/user'

function App() {
  const output = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment: {output.user}</button>
      {/* <button>Decrement: {output.user}</button> */}
    </>
  )
}

export default App
