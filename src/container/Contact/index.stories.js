import Contact from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('Contact', module)
.add('default', () => <Contact />)
