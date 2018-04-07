import { storiesOf } from '@storybook/react';
import React from 'react';
import BreadCrumb from './index';

storiesOf('BreadCrumb', module)
  .add('default', () => (<BreadCrumb content={
  { title: 'Home' }
} />));
