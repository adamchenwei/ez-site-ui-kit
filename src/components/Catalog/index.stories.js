import Catalog from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Records from './__mock__/Records';

const data = Records.getAll();
console.log(data);
storiesOf('Catalog', module)
.add('default', () => <Catalog collection={{
  data,
}} />)
