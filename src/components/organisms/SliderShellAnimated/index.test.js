import React from 'react';
import renderer from 'react-test-renderer';
import SliderShellAnimated from './index';
import { COMPONENT_LABEL, ES6 } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT_LABEL}/${ES6}/SliderShellAnimated/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<SliderShellAnimated />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
