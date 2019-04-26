import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { renderHook, act } from 'react-hooks-testing-library'

import AddTask from './AddTask';
import useTasks from '../../hooks/useTasks'

describe('AddTask', () => {
  it('renders the AddTask', () => {
    const { getByText } = render(<AddTask />)
    const button = getByText('Add')
    expect(button.innerHTML).toBe('Add')
  });

  it('Should add a Task after clicking the button', () => {
    const { add } = renderHook(() => useTasks());
    const { getByTestId } = render(<AddTask addTask={addTask} />)
    
    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'cleaning' } });

    act(() => add.current.addTask('test'))

    expect(input.value).toBe('cleaning')
    expect(add.current.addTask('test')).toHaveBeenCalledTimes(1)
  })
})