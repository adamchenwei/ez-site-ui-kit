import React from 'react';
import renderer from 'react-test-renderer';
import DisplayCenter from './index';

describe('DisplayCenter', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<DisplayCenter><span>test child</span></DisplayCenter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
