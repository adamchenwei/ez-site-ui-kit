import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './index';

storiesOf('Container/About (DontTest)', module)
  .add('default', () => <Router><About /></Router>);
