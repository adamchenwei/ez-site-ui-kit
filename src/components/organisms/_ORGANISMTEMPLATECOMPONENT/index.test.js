import React from 'react';
import renderer from 'react-test-renderer';
import OrganismTemplateComponent from './index';
import { COMPONENT_LABEL, ES6 } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT_LABEL}/${ES6}/OrganismTemplateComponent/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<OrganismTemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
