import ProductListing from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

storiesOf('ProductListing', module)
  .add('default', () =>
    (<Router>
      <ProductListing params={{
      productRef: null,
      tagRef: null,
    }}
      />
    </Router>));
