import React from 'react';
import renderer from 'react-test-renderer';
import OrganismsTemplateComponent from './index';

describe('OrganismsTemplateComponent', () => {
  test('renders as expected', () => {
    const tree = renderer.create(<OrganismsTemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
