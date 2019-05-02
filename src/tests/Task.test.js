import React from 'react';
import { render } from 'react-testing-library';

import Task from '../components/Task/Task';

describe('Task', () => {
  it('renders the Task', () => {
    const props = { text: "A simple task", index: 1, deleteTask: jest.fn() };
    render(<Task {...props} />)
  });
})