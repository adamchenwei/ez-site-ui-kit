import { storiesOf } from '@storybook/react';

import React from 'react';
import SnapshotDisplay from './index';

storiesOf('SnapshotDisplay', module)
  .add('default', () => <SnapshotDisplay />);
