import React from 'react';
import { storiesOf } from '@storybook/react';
import SliderShellAnimated from './index';
import { COMPONENT_LABEL, ES6, ORGANISM_LABEL } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT_LABEL}/${ES6}/${ORGANISM_LABEL}/SliderShellAnimated/Stand Alone`, module)
  .add('default', () => (
    <SliderShellAnimated />
  ));
