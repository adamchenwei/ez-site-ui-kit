import React from 'react';
import renderer from 'react-test-renderer';
import MoleculesTemplateComponent from './index';

describe('MoleculesTemplateComponent', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<MoleculesTemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
