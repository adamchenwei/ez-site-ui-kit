import React from 'react';
import { storiesOf } from '@storybook/react';
import PositionedSlideShell from './index';
import { COMPONENT_LABEL, ES6, ORGANISM_LABEL } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT_LABEL}/${ES6}/${ORGANISM_LABEL}/PositionedSlideShell/Stand Alone`, module)
  .add('default', () => (
    <PositionedSlideShell />
  ));
