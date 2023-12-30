import addNumber from "../../utils/number";

function Home() {
  const totalNumber = addNumber(54, 58);
  return <div>Your output - {totalNumber}</div>;
}

export default Home;
