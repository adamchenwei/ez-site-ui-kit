import React from 'react';
import renderer from 'react-test-renderer';
import TemplateComponent from './index';
import { COMPONENT_LABEL, BOOTSTRAP } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT_LABEL}/${BOOTSTRAP}/AtomTemplateComponent/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<TemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
