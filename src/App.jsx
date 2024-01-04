import React from "react";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <div className="App">
      <Card
        title="The Buddha"
        imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROztnyoTZowVfyBw3GOCvUkYrkSJu3XtbqIT74JfgdR7_ilgor"
        body="According to Buddhist tradition, he was born in Lumbini, in what is now Nepal,[b] to royal parents of the Shakya clan, but renounced his home life to live as a wandering ascetic (Sanskrit: śramaṇa).[7][h] After leading a life of mendicancy, asceticism, and meditation, he attained enlightenment at Bodh Gaya in what is now India. The Buddha thereafter wandered through the lower Indo-Gangetic Plain, teaching and building a monastic order. He taught a Middle Way between sensual indulgence and severe asceticism,[8] leading to Nirvana,[i] that is, freedom from ignorance, craving, rebirth, and suffering. His teachings are summarized in the Noble Eightfold Path, a training of the mind that includes ethical training and meditative practices such as sense restraint, kindness toward others, mindfulness, and jhana/dhyana (meditation proper). He died in Kushinagar, attaining parinirvana.[d] The Buddha has since been venerated by numerous religions and communities across Asia."
      />
    </div>
  );
}

export default App;
