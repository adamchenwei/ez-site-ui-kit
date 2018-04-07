import React from 'react';
import { storiesOf } from '@storybook/react';
import OrganismTemplateComponent from './index';
import { COMPONENT, PURE } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT}/${PURE}/Organism/OrganismTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <OrganismTemplateComponent />
  ));
