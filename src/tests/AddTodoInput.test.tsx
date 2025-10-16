import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import AddTodoInput from '../components/AddTodoInput';

test('adds todo when Add button pressed', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <AddTodoInput />
    </Provider>
  );

  const input = getByPlaceholderText('Add new task...');
  const button = getByText('Add');

  fireEvent.changeText(input, 'Learn Detox');
  fireEvent.press(button);

  const state = store.getState().todos.items;
  expect(state[0].title).toBe('Learn Detox');
});
