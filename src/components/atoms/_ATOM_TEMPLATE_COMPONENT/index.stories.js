import React from 'react';
import { storiesOf } from '@storybook/react';
import AtomTemplateComponent from './index';
import AtomName from '../../../storybookonly/CategoryName/AtomName';

storiesOf(`Component/${AtomName}/AtomTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <AtomTemplateComponent />
  ));
