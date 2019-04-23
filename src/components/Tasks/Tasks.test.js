import React from 'react';
import { render } from 'react-testing-library';

import Tasks from './Tasks';

describe('Tasks', () => {
  it('Renders the Tasks ', () => {
    const tasks = [{ text: "A simple task", deleteTask: jest.fn() }];
    render(<Tasks tasks={tasks} />)
  })
})

