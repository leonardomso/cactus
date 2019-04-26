import React from 'react';
import { render, waitForElement, fireEvent } from 'react-testing-library';

import AddTask from './AddTask';

describe('AddTask', () => {
  it('renders the AddTask', () => {
    const { getByText } = render(<AddTask />)
    const button = getByText('Add')
    expect(button.innerHTML).toBe('Add')
  });

  it('Should add a Task after clicking the button', () => {
    const addTask = jest.fn();

    const { getByTestId } = render(<AddTask addTask={addTask} />)
    
    const input = getByTestId('input')  

    fireEvent.change(input, { target: { value: 'cleaning' } });

    fireEvent.click(addTask);

    expect(input.value).toBe('cleaning')
    expect(addTask).toHaveBeenCalledTimes(1)
  })
})