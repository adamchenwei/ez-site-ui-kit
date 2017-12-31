import BreadCrumb from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('BreadCrumb', module)
.add('default', () => <BreadCrumb content={
  {title: 'Home',}
} />)
