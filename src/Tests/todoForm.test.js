import React from 'react';
import renderer from 'react-test-renderer';
import TodoForm from '../Components/TodoForm';

it('renders correctly', () => {
  const tree = renderer.create(
    <TodoForm currentItem={{ text: 'Thing to do', key: 1}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});