import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { renderHook, act } from "react-hooks-testing-library";

import AddTask from './AddTask';

import useTasks from '../../hooks/useTasks';

describe('AddTask', () => {
  it('renders the AddTask', () => {
    const { getByText } = render(<AddTask />)
    const button = getByText('Add')
    expect(button.innerHTML).toBe('Add')
  });

  it('Get value of the input', () => {
    const setText = jest.fn();
    const { getByTestId } = render(<AddTask setText={setText} />)
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'cleaning' } });
    expect(input.value).toBe('cleaning')
  })

  it('Should add a Task after clicking the Add button', () => {
    const { result } = renderHook(() => useTasks());
    expect(result.current.tasks.length).toBe(0);
    act(() => result.current.addTask());
    expect(result.current.tasks.length).toBe(1);
  })
})