import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has initial color', () => {
  render(<App />)
  //find an element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton);

  // expect the background to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')
});

test('Checkbox disable button on first click enables on second click', () => {
  render(<App />)

  // check that the button starts out enable
  //selecting a button element
  const button = screen.getByRole('button');
  // check that the checkbox starts out unchecked
  //selecting a checkbox element
  const checkbox = screen.getByRole('checkbox');

  // click checkbox to disable the button
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  // click checkbox to re-enabled the button
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

})
test('Disabled button has gray background and reverts to red', () => {
  render(<App />)
  // Selecting elements
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });
  const colorButton = screen.getByRole('button', 'Change to red');

  // Disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // Re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});
})

test('Clicked disabled button has gray background and revert to blue', () => {
  render(<App />)
  // Selecting elements 
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });
  const colorButton = screen.getByRole('button', 'Change to blue');

  // Change button to blue
  fireEvent.click(colorButton)
  
  // Disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // Re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
})