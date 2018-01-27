import CatalogList from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Records from './__mock__/Records';

const data = Records.getAll();
console.log(data);
storiesOf('CatalogList', module)
.add('default', () => <CatalogList collection={{
  data,
}} />)
