import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';


import React from 'react';
import { buildMenuItems } from './../MobileMenu/factory/menu';
import MenuBarNewRouteEnabled from './index';


const menuBarItems = buildMenuItems(2);

storiesOf(`
Menu Bar New - RouteEnabled
`, module)
  .add('standard amount of items', () => (
    <Router>
      <MenuBarNewRouteEnabled
        menuItems={menuBarItems}
      />
    </Router>
  ));
