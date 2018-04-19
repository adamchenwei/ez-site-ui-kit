import React from 'react';
import { storiesOf } from '@storybook/react';
import MoleculesTemplateComponentTemplateComponent from './index';
import MoleculeName from '../../../storybookonly/CategoryName/MoleculeName';

storiesOf(`Component/${MoleculeName}/MoleculesTemplateComponentTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <MoleculesTemplateComponentTemplateComponent />
  ));
