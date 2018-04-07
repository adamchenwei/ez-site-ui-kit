import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './index';
import { CONTAINER, BOOTSTRAP } from '../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${CONTAINER}/${BOOTSTRAP}/Contact (DontTest)`, module)
  .add('default', () => <Router><Contact /></Router>);
