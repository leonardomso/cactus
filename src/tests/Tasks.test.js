import React from 'react';
import { render } from 'react-testing-library';

import Tasks from '../components/Tasks/Tasks';

describe('Tasks', () => {
  it('Renders the Tasks ', () => {
    const tasks = [{ text: "A simple task", deleteTask: jest.fn() }];
    const { getAllByTestId } = render(<Tasks tasks={tasks} />)
    const task = getAllByTestId('task').map(li => li.textContent);
    const fakeTasks = tasks.map(task => task.text);
    expect(task).toEqual(fakeTasks);
  })
})

