import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import SlideShow from './index';

storiesOf('SlideShow', module)
  .add('default', () => (
    <SlideShow slides={[
      {
        id: 0,
        content: {
          url: '/assets/images/banner/Banner 1.jpg',
        },
      },
      {
        id: 1,
        content: {
          url: '/assets/images/banner/Banner 2.jpg',
        },
      },
      {
        id: 2,
        content: {
          url: '/assets/images/banner/Banner 3.jpg',
        },
      },
      {
        id: 3,
        content: {
          url: '/assets/images/banner/Banner 4.jpg',
        },
      },
    ]}
    />));
