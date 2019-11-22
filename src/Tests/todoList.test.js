import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../Components/TodoList';

it('renders correctly', () => {
  const tree = renderer.create(
    <TodoList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});