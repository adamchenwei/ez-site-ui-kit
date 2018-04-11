import { storiesOf } from '@storybook/react';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductListing from './index';
import { BOOTSTRAP, CONTAINER } from '../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${CONTAINER}/${BOOTSTRAP}/ProductListing (DontTest)`, module)
  .add('default', () =>
    (
      <Router>
        <ProductListing params={{
        productRef: null,
        tagRef: null,
      }}
        />
      </Router>
    ));
