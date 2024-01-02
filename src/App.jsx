import React from "react";
import "./global.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Hello
        World
        title="Card Title"
        imgUrl="https://github.com/steamnp/bfd42/blob/assignment-1/design/active-states.jpg"
        body="Mt Everest is the highest mountain in the entire world with 8849 M above the sea level which lies in the Solukhumbu District of Nepal"
      />
    </div>
  );
}

export default App;
