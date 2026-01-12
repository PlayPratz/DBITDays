import "./App.css";
import { QuoteSlide } from "./quotes";

function App() {
  return (
    <div className="App">
      <header className="header">Click for next</header>
      <div className="Content">
        <QuoteSlide />
      </div>
    </div>
  );
}

export default App;
