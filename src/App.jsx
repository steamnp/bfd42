import React from "react";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <div className="App">
      <Card
        title="The Buddha"
        imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROztnyoTZowVfyBw3GOCvUkYrkSJu3XtbqIT74JfgdR7_ilgor"
        body="According to Buddhist tradition, he was born in Lumbini, in what is now Nepal,[b] to royal parents of the Shakya clan, but renounced his home life to live as a wandering ascetic (Sanskrit: śramaṇa).[7][h] After leading a life of mendicancy, asceticism, and meditation, he attained enlightenment at Bodh Gaya in what is now India."
      />
    </div>
  );
}

export default App;
