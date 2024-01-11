import Sum from "../../../utils/number";
function Home() {
  const total = Sum(10, 10);
  return <div>'The sum is:' {total}</div>;
}
export default Home;
