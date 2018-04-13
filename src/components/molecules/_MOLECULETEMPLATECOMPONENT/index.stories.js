import React from 'react';
import { storiesOf } from '@storybook/react';
import MoleculeTemplateComponent from './index';
import { COMPONENT_LABEL, ES6, MOLECULE_LABEL } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT_LABEL}/${ES6}/${MOLECULE_LABEL}/MoleculeTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <MoleculeTemplateComponent />
  ));
