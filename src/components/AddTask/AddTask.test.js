import React from 'react';
import { render, waitForElement, fireEvent } from 'react-testing-library';

import AddTask from './AddTask';

describe('AddTask', () => {
  it('renders the AddTask', () => {
    const { getByText } = render(<AddTask />)
    const button = getByText('Add')
    expect(button.innerHTML).toBe('Add')
  });

  // it('Should add a Task after clicking the button', () => {
  //   const newTask = "I should start to write more tests, for sure.";
  //   const { getByText } = render(<AddTask />)
  //   const button = getByText('Add')
  //   expect(button.innerHTML).toBe('Add')
  // })

  // it('Should not add a Task after clicking the button with a empty input value', () => {
  //   const { getByText } = render(<AddTask />)
  //   const button = getByText('Add')
  //   expect(button.innerHTML).toBe('Add')
  // })
})