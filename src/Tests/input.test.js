import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Components/Input';

it('renders correctly', () => {
  const tree = renderer.create(
    <Input 
      placeholder="Start typing here..." 
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});