import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/reducer/user";

function App() {
  const output = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>
        Increment: {output.user}
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement: {output.user}
      </button>
    </>
  );
}

export default App;
