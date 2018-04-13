import { storiesOf } from '@storybook/react';

import React from 'react';
import { COMPONENT_LABEL, BOOTSTRAP } from '../../storybookonly/config/MENU_CATEGORIES';
import CatalogDetail from './index';

storiesOf(`${COMPONENT_LABEL}/${BOOTSTRAP}/CatalogDetail (DontTest)`, module)
// TODO - flaw! lower screen szie below 500px width
// will see image shrink in height, need media query
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
