import { useState } from "react";
import Services from "./services";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      {value}
      <Services newValue={value} />
    </div>
  );
}

export default App;
