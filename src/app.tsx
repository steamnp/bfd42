import { useState } from "react";
import Services from "./services";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Services value={value} />
    </div>
  );
}

export default App;
