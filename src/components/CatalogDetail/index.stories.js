import CatalogDetail from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('Component/CatalogDetail (DontTest)', module)
// TODO - flaw! lower screen szie below 500px width will see image shrink in height, need media query
  .add('1000x500', () => (<CatalogDetail
    query="Al+Masjid+Al+Awwal+Pittsburgh+PA"
    snapshots={[
    {
        url: '/placeholder/images/1000x500.png',
    },
  ]}
  />))
  .add('300x200', () => (<CatalogDetail
    query="Al+Masjid+Al+Awwal+Pittsburgh+PA"
    snapshots={[
    {
        url: '/placeholder/images/300x200.png',
    },
  ]}
  />))
  .add('500x500', () => (<CatalogDetail
    query="Al+Masjid+Al+Awwal+Pittsburgh+PA"
    snapshots={[
  {
      url: '/placeholder/images/500x500.png',
  },
]}
  />))
  .add('500x1000', () => (<CatalogDetail
    query="Al+Masjid+Al+Awwal+Pittsburgh+PA"
    snapshots={[
  {
      url: '/placeholder/images/500x1000.png',
  },
]}
  />));
