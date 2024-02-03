import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/reducer/user";

function App() {
  const output = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{output.user}</h1>
    </>
  );
}

export default App;
