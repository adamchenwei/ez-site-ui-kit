import CatalogItem from './index';
import { storiesOf } from '@storybook/react';

import React from 'react';
import getACatelogItem from './../../__mock__/getACatelogItem';

const {
  id,
  name,
  route,
  description,
  website,
  socialAccounts,
  locations,
  imamsList,
  phones,
  snapshots,
} = getACatelogItem();

const location = locations[0];
const subTitle = `${location.city || ''}, ${location.state || ''} ${location.country || ''}`;

storiesOf('CatalogItem', module)
  .add('default', () => (<CatalogItem
    id={id}
    title={name}
    location={location}
    subTitle={subTitle}
    description={description}
    websiteUrl={website}
    snapshots={snapshots}
  />));
