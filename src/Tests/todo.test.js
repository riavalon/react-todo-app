import React from 'react';
import renderer from 'react-test-renderer';
import Todo from '../Components/Todo';

it('renders correctly', () => {
  const tree = renderer.create(
    <Todo 
      text="Todo or not Todo, that is the question."
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});