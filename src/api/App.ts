import GlobalStyle from "./styles/createGlobalStyle";
import { DarkButton, LightButton } from "./styles/Button";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <DarkButton>Learn More</DarkButton>
      <LightButton>Learn More</LightButton>
    </div>
  );
}
