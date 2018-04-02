import React from 'react';
import renderer from 'react-test-renderer';
import AnimatedLoadingBar from './index';

describe('AnimatedLoadingBar', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<AnimatedLoadingBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
