import Catalog from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('Catalog', module)
.add('default', () => <Catalog />)
