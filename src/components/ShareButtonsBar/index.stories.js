import ShareButtonsBar from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('Share Buttons Bar', module)
.add('default', () => <ShareButtonsBar />)
.add('fixed width', () => <ShareButtonsBar style={{width: '200px'}} />)
.add('with link', () => <ShareButtonsBar homeLink='www' />)