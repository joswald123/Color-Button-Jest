import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

test('button has initial color', () => {
  render(<App />)
  //find an element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton);

  // expect the background to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
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
test('Disabled button has gray background and reverts to Medium Violet Red', () => {
  render(<App />)
  // Selecting elements
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });
  const colorButton = screen.getByRole('button', 'Change to Medium Violet Red');

  // Disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // Re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'});
})

test('Clicked disabled button has gray background and revert to Midnight Blue', () => {
  render(<App />)
  // Selecting elements 
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });
  const colorButton = screen.getByRole('button', 'Change to Midnight Blue');

  // Change button to blue
  fireEvent.click(colorButton)
  
  // Disabled button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // Re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  })
})