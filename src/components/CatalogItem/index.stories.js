import CatalogItem from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import catelog from './__mock__/catelog';

const {
  id,
  style,
  title,
  subTitle,
  description,
  websiteUrl,
  snapshots,
} = catelog[0];

storiesOf('CatalogItem', module)
.add('default', () => <CatalogItem
  id={id}
  title={title}
  description={description}
  subTitle={subTitle}
  websiteUrl={websiteUrl}
  snapshots={snapshots}
/>)
