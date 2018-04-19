import React from 'react';
import renderer from 'react-test-renderer';
import TemplateComponent from './index';

describe('TemplateComponent', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<TemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
