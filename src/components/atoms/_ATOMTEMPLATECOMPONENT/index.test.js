import React from 'react';
import renderer from 'react-test-renderer';
import TemplateComponent from './index';
import { COMPONENT, BOOTSTRAP } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT}/${BOOTSTRAP}/AtomTemplateComponent/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<TemplateComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
