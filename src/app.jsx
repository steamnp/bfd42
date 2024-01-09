import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  // Normal js variable
  // let email;

  // state variable
  // hook

  return (
    <article>
      <label htmlFor="">Email</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h3>You typed: {email}</h3>
    </article>
  );
}

export default App;
