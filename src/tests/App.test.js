import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import App from '../components/App';

describe('App', () => {
  it('renders the App', () => {
    render(<App />)
  });

  it('Should add a Task after clicking the button', () => {
    const oldTasks = [{ text: "A simple task", deleteTask: jest.fn() }];
    const newTasks = [
      { text: "A simple task", deleteTask: jest.fn() }, 
      { text: "New task", deleteTask: jest.fn() }
    ];
    const { getByTestId } = render(<App />);
    const addButton = getByTestId("addButton");
    const tasks = getByTestId("tasks");
    expect(tasks).toEqual(oldTasks);
    fireEvent.click(addButton);
    expect(tasks).toEqual(newTasks);
  })
})

