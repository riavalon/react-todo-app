import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Components/Button';

it('renders correctly', () => {
  const tree = renderer.create(
    <Button type="submit">Click Me!</Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});