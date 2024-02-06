import { useSelector } from "react-redux";
// import { increment } from "./redux/reducer/user";

function App() {
  const output = useSelector((state) => state);
  console.log(output);
  return (
    <div>
      <button>Increment: </button>
      <button>Decrement: </button>
    </div>
  );
}

export default App;
