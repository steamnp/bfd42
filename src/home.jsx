import Header from "./header";

function Home() {
  return (
    <div>
      {/* headerText -> props */}
      {/* subTitle -> props*/}
      <Header subTitle="I am subtitle!">
        <h1>Hello React</h1>
        <h2>React Component</h2>
      </Header>

      <Header>
        <h1>Hello JS</h1>
      </Header>
    </div>
  );
}

export default Home;
