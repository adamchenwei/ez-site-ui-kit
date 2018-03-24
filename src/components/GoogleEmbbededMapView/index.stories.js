import GoogleEmbbededMapView from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('GoogleEmbbededMapView', module)
  .add('default', () => <GoogleEmbbededMapView />);
