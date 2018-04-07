import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import ShareButtonsBar from './index';

storiesOf('Comonent/Share Buttons Bar (DontTest)', module)
  .add('default', () => <ShareButtonsBar />)
  .add('fixed width', () => <ShareButtonsBar style={{ width: '200px' }} />)
  .add('with link', () => <ShareButtonsBar homeLink="www" />);
