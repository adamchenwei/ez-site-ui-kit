import { storiesOf } from '@storybook/react';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import getACatelogItem from './../../__mock__/getACatelogItem';
import CatalogList from './index';

const data = [];
for (let i = 0; i < 10; i += 1) {
  data.push(getACatelogItem());
}

storiesOf('CatalogList', module)
  .add('default', () => (
    <Router>
      <CatalogList collection={{
        data,
      }}
      />
    </Router>));
