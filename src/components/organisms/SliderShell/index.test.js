import React from 'react';
import renderer from 'react-test-renderer';
import SliderShell from './index';
import { COMPONENT_LABEL, ES6 } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT_LABEL}/${ES6}/SliderShell/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<SliderShell />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
