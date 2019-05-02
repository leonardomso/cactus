import React from 'react';
import { render, fireEvent } from 'react-testing-library';

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
})