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
      id='disable-button-checkbox'
      defaultChecked={buttonDisabled}
      aria-checked={buttonDisabled}
      onChange={(e) => setButtonDisabled(e.target.checked)}/>
      <label htmlFor='disable-button-checkbox'>Disable button</label>

    </div>
  );
}

export default App;
