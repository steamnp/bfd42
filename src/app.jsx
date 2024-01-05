import Home from "./Home";

function App() {
  return (
    <div>
      <div>Home</div>
      <button
        onClick={function () {
          console.log("Heyyyy");
        }}
      >
        {" "}
        Click Me
      </button>
      <Home className="container" randomProp="Tsering" />
    </div>
  );
}
export default App;
