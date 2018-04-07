import React from 'react';
import renderer from 'react-test-renderer';
import LoadingScreen from './index';

describe('LoadingScreen', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<LoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
