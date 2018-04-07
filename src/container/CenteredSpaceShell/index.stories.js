import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenteredSpaceShell from './index';

storiesOf('CenteredSpaceShell', module)
  .add('default', () => <CenteredSpaceShell />);
