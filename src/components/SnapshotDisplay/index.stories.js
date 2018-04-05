import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import SnapshotDisplay from './index';

storiesOf('SnapshotDisplay', module)
  .add('default', () => <SnapshotDisplay />);
