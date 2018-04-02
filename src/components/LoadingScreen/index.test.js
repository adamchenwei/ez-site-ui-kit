import React from 'react';
import renderer from 'react-test-renderer';
import LoadingMask from './index';

describe('LoadingMask', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<LoadingMask />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
