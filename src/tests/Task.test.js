import React from 'react';
import { render } from 'react-testing-library';
import { renderHook, act } from "react-hooks-testing-library";

import Task from '../components/Task/Task';

import useTasks from '../hooks/useTasks';

describe('Task', () => {
  it('renders the Task', () => {
    const props = { text: "A simple task", index: 1, deleteTask: jest.fn() };
    render(<Task {...props} />)
  });

  it('Should delete a Task after clicking the X button', () => {
    const { result } = renderHook(() => useTasks());
    expect(result.current.tasks.length).toBe(0);
    act(() => result.current.addTask());
    expect(result.current.tasks.length).toBe(1);
    act(() => result.current.deleteTask());
    expect(result.current.tasks.length).toBe(0);
  })
})