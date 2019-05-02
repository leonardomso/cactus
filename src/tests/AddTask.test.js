import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import App from '../components/App';
import AddTask from '../components/AddTask/AddTask';

describe('AddTask', () => {
  it('renders the AddTask', () => {
    const { getByText } = render(<AddTask />)
    const button = getByText('Add')
    expect(button.innerHTML).toBe('Add')
  });

  it('Get value of the input', () => {
    const { getByTestId } = render(<AddTask />)
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'cleaning' } });
    expect(input.value).toBe('cleaning')
  })

  it('Should add a Task after clicking the button', () => {
    const tasks = [{ text: "A simple task", deleteTask: jest.fn() }];
    const newTask = { text: "New task", deleteTask: jest.fn() };
    const addTask = jest.fn();
    const { getByTestId, container } = render(<AddTask addTask={addTask} />)
    const input = getByTestId('input');
    const addButton = getByTestId(container, "submit-button");
    fireEvent.change(input, { target: { value: 'cleaning' } });
    expect(input.value).toBe('cleaning')
    expect(addButton).toHaveBeenCalledTimes(1)
  })
})