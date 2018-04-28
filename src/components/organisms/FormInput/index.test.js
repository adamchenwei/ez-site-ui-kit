import React from 'react';
import renderer from 'react-test-renderer';
import FormInput from './index';

describe('FormInput', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<FormInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
