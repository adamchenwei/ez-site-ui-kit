import ContactForm from './index';
import { storiesOf } from '@storybook/react';

import React from 'react';

storiesOf('Contact Form', module)
  .add('basic', () => <ContactForm />);

