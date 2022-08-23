import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpace(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  // Using Hooks to initialize a state
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [ buttonDisabled, setButtonDisabled ] = useState(false)
  
  // Ternary to define the button text 
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button 
      style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor }}
      onClick={() => setButtonColor(newButtonColor)}
      disabled={buttonDisabled}
      >Change to {replaceCamelWithSpace(newButtonColor)}
      </button>
      <input 
      type='checkbox'
      id='disable-button-checkbox'
      defaultChecked={buttonDisabled}
      aria-checked={buttonDisabled}
      onChange={(e) => setButtonDisabled(e.target.checked)}/>
      <label htmlFor='disable-button-checkbox'>Disabled button</label>

    </div>
  );
}

export default App;
