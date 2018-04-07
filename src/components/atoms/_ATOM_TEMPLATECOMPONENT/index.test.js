import React from 'react';
import renderer from 'react-test-renderer';
import AtomTemplateComponent from './index';

describe('Component/Atom/AtomTemplateComponent', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<AtomTemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
