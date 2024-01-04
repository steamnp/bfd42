import React from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="card title"
        imageUrl="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/kaiwxzdh90xhbdwsstvl.jpg"
        body="The quick brown fox jumps over the lazy dog"
      />
    </div>
  );
}

export default App;
