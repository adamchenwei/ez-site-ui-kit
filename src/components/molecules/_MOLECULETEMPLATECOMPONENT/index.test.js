import React from 'react';
import renderer from 'react-test-renderer';
import MoleculeTemplateComponent from './index';
import { COMPONENT_LABEL, ES6 } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT_LABEL}/${ES6}/MoleculeTemplateComponent/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<MoleculeTemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
