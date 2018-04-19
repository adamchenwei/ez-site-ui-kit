import React from 'react';
import { storiesOf } from '@storybook/react';
import DisplayCenter from './index';

storiesOf('Storybook Only/DisplayCenter', module)
  .add('default', () => (
    <DisplayCenter>
      <span>This container centers everything in the page for better viewability</span>
    </DisplayCenter>
  ));
