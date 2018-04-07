import React from 'react';
import renderer from 'react-test-renderer';
import MoleculeTemplateComponent from './index';
import { COMPONENT, PURE } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT}/${PURE}/MoleculeTemplateComponent/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<MoleculeTemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
