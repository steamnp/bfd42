import React from "react";
import { sum } from "../../utils/number";

const Home = () => {
  const result = sum(37, 10);
  return (
    <div>
      <h1>Sum of Two Numbers</h1>
      <p>Result: {result}</p>
    </div>
  );
};

export default Home;
