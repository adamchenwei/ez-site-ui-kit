import React from 'react';
import { storiesOf } from '@storybook/react';
import EzTester from './index';
import AtomName from '../../../storybookonly/CategoryName/AtomName';

storiesOf(`Component/${AtomName}/EzTester/Stand Alone`, module)
  .add('default', () => (
    <EzTester />
  ));
