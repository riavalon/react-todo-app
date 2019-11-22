import React from 'react';
import renderer from 'react-test-renderer';
import TodoContainer from '../Components/TodoContainer';

it('renders correctly', () => {
  const todos = [
    {
      text: 'Laundry',
      key: 1,
    },
    {
      text: 'Grocery Shopping',
      key: 2,
    },
  ]
  const tree = renderer.create(
    <TodoContainer todos={todos} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});