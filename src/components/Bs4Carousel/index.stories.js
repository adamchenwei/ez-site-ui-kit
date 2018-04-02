import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { action } from '@storybook/addon-actions'; //eslint-disable-line
import Bs4Carousel from './index';

storiesOf('Bs4Carousel', module)
  .add('default', () => <Bs4Carousel />);
