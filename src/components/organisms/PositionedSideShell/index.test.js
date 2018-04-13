import React from 'react';
import renderer from 'react-test-renderer';
import PositionedSlideShell from './index';
import { COMPONENT_LABEL, ES6 } from '../../../storybookonly/config/MENU_CATEGORIES';

describe(`${COMPONENT_LABEL}/${ES6}/PositionedSlideShell/Unit Test`, () => {
  test('renders as expected', () => {
    const tree = renderer.create(<PositionedSlideShell />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
