import CenteredSpaceShell from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('CenteredSpaceShell', module)
  .add('default', () => <CenteredSpaceShell />);
