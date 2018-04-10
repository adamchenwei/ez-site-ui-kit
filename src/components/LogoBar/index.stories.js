import { storiesOf } from '@storybook/react';
import React from 'react';
import LogoBar from './index';

const mock = {
  data: {
    logo: {
      image: {
        url: './assets/images/logo.svg',
      },
    },
  },
};

storiesOf('LogoBar', module)
  .add('default', () => <LogoBar content={mock} />);
