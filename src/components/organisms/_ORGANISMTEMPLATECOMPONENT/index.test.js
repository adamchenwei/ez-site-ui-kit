import React from 'react';
import renderer from 'react-test-renderer';
import OrganismTemplateComponent from './index';
import { COMPONENT, BOOTSTRAP } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT}/${BOOTSTRAP}/OrganismTemplateComponent/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<OrganismTemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
