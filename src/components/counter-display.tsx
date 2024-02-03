import { useAppSelector } from '../redux/hooks/hooks'

function CounterDisplay() {
  const count = useAppSelector((state) => state.user)
  return <h1>{count}</h1>
}

export default CounterDisplay
