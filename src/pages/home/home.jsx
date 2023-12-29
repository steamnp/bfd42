import sumFunction from "../../utils/number";

function Home() {
  const totalSum = sumFunction(1, 1);
  return <div>{totalSum}</div>;
}

export default Home;
