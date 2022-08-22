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