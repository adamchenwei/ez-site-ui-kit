import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { action } from '@storybook/addon-actions'; //eslint-disable-line
import ATemplaetComponent from './index';

storiesOf('components/ATemplaetComponent', module)
  .add('default', () => <ATemplaetComponent />);
