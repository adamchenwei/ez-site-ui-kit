import LogoBar from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
const mock = {
  data: {logo: {
    image: {
      url: './assets/images/logo.svg',
    }
  }}
};

storiesOf('LogoBar', module)
.add('default', () => <LogoBar content={mock}/>)
