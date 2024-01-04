import React from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="card title"
        imageUrl="https://github.com/steamnp/bfd42/blob/assignment-1/design/active-states.jpg"
        body="The quick brown fox jumps over the lazy dog"
      />
    </div>
  );
}

export default App;
