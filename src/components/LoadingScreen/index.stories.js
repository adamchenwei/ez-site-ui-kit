import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingScreen from './index';

storiesOf('Component/LoadingScreen/Stand Alone', module).add('default', () => (
  <LoadingScreen fullScreen />
));
