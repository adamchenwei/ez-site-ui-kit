import CatalogDetail from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('CatalogDetail', module)
.add('default', () => <CatalogDetail />)
