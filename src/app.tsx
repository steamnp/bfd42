import { increment, decrement } from "./redux/reducer/user";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";

function App() {
  const output = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{output.user}</h1>
    </>
  );
}

export default App;
