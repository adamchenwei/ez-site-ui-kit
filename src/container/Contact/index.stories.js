import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './index';

storiesOf('Contact', module)
  .add('default', () => <Router><Contact /></Router>);
