import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { action } from '@storybook/addon-actions'; //eslint-disable-line
import SiteAboutUsSection from './index';

storiesOf('components/SiteAboutUsSection', module)
  .add('default', () => <SiteAboutUsSection />);
