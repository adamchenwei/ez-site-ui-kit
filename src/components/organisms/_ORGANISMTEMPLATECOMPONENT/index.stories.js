import React from 'react';
import { storiesOf } from '@storybook/react';
import OrganismTemplateComponent from './index';
import { COMPONENT_LABEL, ES6, ORGANISM_LABEL } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT_LABEL}/${ES6}/${ORGANISM_LABEL}/OrganismTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <OrganismTemplateComponent />
  ));
