import React from 'react';
import { storiesOf } from '@storybook/react';
import OrganismsTemplateComponent from './index';
import OrganismName from '../../../storybookonly/CategoryName/OrganismName';

storiesOf(`Component/${OrganismName}/OrganismsTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <OrganismsTemplateComponent />
  ));
