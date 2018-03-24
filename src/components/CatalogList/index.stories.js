import CatalogList from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import getACatelogItem from './../../__mock__/getACatelogItem';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push(getACatelogItem());
}

storiesOf('CatalogList', module)
  .add('default', () => (<Router><CatalogList collection={{
  data,
}}
  />
  </Router>));
