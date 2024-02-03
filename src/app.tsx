import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { decrement, increment } from "./redux/reducer/user";

function App() {
  const output = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
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
