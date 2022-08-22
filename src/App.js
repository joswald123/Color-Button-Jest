import { useState } from 'react';
import './App.css';

function App() {
  // Using Hooks to initialize a state
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ buttonDisabled, setButtonDisabled ] = useState(false)
  
  // Ternary to define the button text 
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
      style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(newButtonColor)}
      disabled={buttonDisabled}
      >Change to {newButtonColor}
      </button>
      <input 
      type='checkbox'
      id='enabled-button-checkbox'
      defaultChecked={buttonDisabled}
      aria-checked={buttonDisabled}
      onChange={(e) => setButtonDisabled(e.target.checked)}
      />

    </div>
  );
}

export default App;
