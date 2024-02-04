import { useSelector } from "react-redux";

function app() {
  const output = useSelector((state) => state);
  console.log(output);
  return <div>app</div>;
}

export default app;
