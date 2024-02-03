import { useAppDispatch } from '../redux/hooks/hooks'
import { decrement, increment } from '../redux/reducer/user'

function UpdateCounter() {
  const dispatch = useAppDispatch()
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default UpdateCounter
