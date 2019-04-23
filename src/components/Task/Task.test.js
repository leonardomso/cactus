import React from 'react';
import { render, waitForElement, fireEvent } from 'react-testing-library';

import Task from './Task';

describe('Task', () => {
  it('renders the Task', () => {
    const props = { text: "A simple task", index: 1, deleteTask: jest.fn() };
    render(<Task {...props} />)
  });

  // it('Should delete a Task after clicking the X icon', () => {
  //   const newTask = "I should start to write more tests, for sure.";
  //   const { getByText } = render(<AddTask />)
  //   const button = getByText('Add')
  //   expect(button.innerHTML).toBe('Add')
  // })
})