import React from 'react';
import { storiesOf } from '@storybook/react';
import MoleculeTemplateComponent from './index';
import { COMPONENT, BOOTSTRAP } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT}/${BOOTSTRAP}/Molecule/MoleculeTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <MoleculeTemplateComponent />
  ));
