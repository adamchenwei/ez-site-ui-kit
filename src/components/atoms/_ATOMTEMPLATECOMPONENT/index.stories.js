import React from 'react';
import { storiesOf } from '@storybook/react';
import AtomTemplateComponent from './index';
import { COMPONENT_LABEL, ES6, ATOM_LABEL } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT_LABEL}/${ES6}/${ATOM_LABEL}/AtomTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <AtomTemplateComponent />
  ));
