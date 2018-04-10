import { storiesOf } from '@storybook/react';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './index';
import { CONTAINER, BOOTSTRAP } from '../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${CONTAINER}/${BOOTSTRAP}/About (DontTest)`, module)
  .add('default', () => <Router><About /></Router>);
