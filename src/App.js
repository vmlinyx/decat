import { useState } from 'react';
import './App.css';
import Cat from './components/Cat';

function App() {
  const [salt, setSalt] = useState(0);

  const handleNextCatClick = () => {
    setSalt(Number.parseInt(Math.random() * 10));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO DECAT</h1>
      </header>
      <Cat salt={salt} />
      <button onClick={handleNextCatClick}>NEXT CAT</button>
    </div>
  );
}

export default App;
