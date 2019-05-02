import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import App from '../components/App';

describe('App', () => {
  it('renders the App', () => {
    render(<App />)
  });

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

