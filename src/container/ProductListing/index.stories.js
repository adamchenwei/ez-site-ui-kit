import ProductListing from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('ProductListing', module)
.add('default', () => <ProductListing params={{
  productRef: null,
  tagRef: null,
}} />)
