import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Product from './index';

storiesOf('Container/Product (DontTest)', module)
  .add('default', () => (
    <Router>
      <Product
        productRef="premium-raw-pistachios"
      />
    </Router>));
