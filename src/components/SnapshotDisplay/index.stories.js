import SnapshotDisplay from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('SnapshotDisplay', module)
.add('default', () => <SnapshotDisplay />)
