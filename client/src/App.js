import { useState } from 'react';
import FancyButton from "./components/FancyButton";

const App = () => {
  const [ counter, setCounter ] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        Hello world!
      </header>
      <FancyButton value={counter} onClick={() => setCounter(counter + 1)} />
    </div>
  );
}

export default App;
