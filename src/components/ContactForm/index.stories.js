import { storiesOf } from '@storybook/react';
import React from 'react';
import ContactForm from './index';

storiesOf('Contact Form', module)
  .add('basic', () => <ContactForm />);

