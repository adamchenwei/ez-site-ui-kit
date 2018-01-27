import CatalogItem from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Records from './__mock__/Records';

const data = Records.getAll()[0];
console.log(data);
storiesOf('CatalogItem', module)
.add('default', () => <CatalogItem
  id={data.id}
  title={data.title}
  description={data.description}
  route={data.route}
/>)
