import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Product from './index';
import { CONTAINER, BOOTSTRAP } from '../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${CONTAINER}/${BOOTSTRAP}/Product (DontTest)`, module)
  .add('default', () => (
    <Router>
      <Product
        productRef="premium-raw-pistachios"
      />
    </Router>));
