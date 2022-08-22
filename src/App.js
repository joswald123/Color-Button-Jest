import { useState } from 'react';
import './App.css';

function App() {
  // Using Hooks to initialize a state
  const [ buttonColor, setButtonColor ] = useState('red');
  
  // Ternary to define the button text 
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
      style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(newButtonColor)}
      >Change to {newButtonColor}
      </button>
      <input type='checkbox'/>

    </div>
  );
}

export default App;
