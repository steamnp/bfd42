import React from "react";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <div className="App">
      <Card
        title="card title"
        imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROztnyoTZowVfyBw3GOCvUkYrkSJu3XtbqIT74JfgdR7_ilgor"
        body="The quick brown fox jumps over the lazy dog"
      />
    </div>
  );
}

export default App;
