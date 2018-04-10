import { storiesOf } from '@storybook/react';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SiteMenuBar from './index';

const menuListStandard = [
  {
    id: 1,
    path: '/',
    title: 'home',
  },
  {
    id: 2,
    path: '/about-us',
    title: 'about us',
  },
  {
    id: 3,
    path: '/menu',
    title: 'menu',
  },
  {
    id: 4,
    path: '/reservation',
    title: 'reservation',
  },
  {
    id: 5,
    path: '/gallery',
    title: 'gallery',
  },
  {
    id: 6,
    path: '/our-chefs',
    title: 'our chefs',
  },
  {
    id: 7,
    path: '/contact',
    title: 'contact',
  },
];

const menuListLong = [
  {
    id: 1,
    path: '/',
    title: 'home',
  },
  {
    id: 2,
    path: '/about-us',
    title: 'about us',
  },
  {
    id: 3,
    path: '/menu',
    title: 'menu',
  },
  {
    id: 4,
    path: '/reservation',
    title: 'reservation',
  },
  {
    id: 5,
    path: '/gallery',
    title: 'gallery',
  },
  {
    id: 6,
    path: '/our-chefs',
    title: 'our chefs',
  },
  {
    id: 7,
    path: '/contact',
    title: 'contact',
  },
  {
    id: 8,
    path: '/',
    title: 'Something Special',
  },
  {
    id: 9,
    path: '/',
    title: 'Something Special',
  },
  {
    id: 10,
    path: '/',
    title: 'Something Special',
  },
  {
    id: 11,
    path: '/',
    title: 'Something Special',
  },
  {
    id: 12,
    path: '/',
    title: 'Something Special',
  },
  {
    id: 13,
    path: '/',
    title: 'Something Special hey',
  },
  {
    id: 14,
    path: '/',
    title: 'Something Special 123 321 123 321 123 321 123 12321 123',
  },
  {
    id: 15,
    path: '/',
    title: 'Something Special Very Much',
  },
];
storiesOf('SiteMenuBar', module)
  .add('default', () => (
    <Router>
      <SiteMenuBar
        menuList={menuListStandard}
        menuItemResponsiveConfig={{
        xs: 12,
        sm: 6,
        md: 3,
        lg: 2,
        xl: 1,
      }}
      />
    </Router>
  ))
  .add('default: long menus', () => (
    <Router>
      <SiteMenuBar menuList={menuListLong} />
    </Router>
  ))
  .add('textcasing: uppercase', () => (
    <Router>
      <SiteMenuBar
        menuList={menuListLong}
        textcasing="uppercase"
      />
    </Router>
  ))
  .add('with custom logo component as child', () => (
    <Router>
      <SiteMenuBar
        menuList={menuListStandard}
        menuItemResponsiveConfig={{
        xs: 12,
        sm: 6,
        md: 3,
        lg: 2,
        xl: 1,
      }}
      >
        <div>Logo</div>
      </SiteMenuBar>
    </Router>
  ))
  .add('align menu items to the left', () => (
    <Router>
      <SiteMenuBar
        menuList={menuListStandard}
        left="true"
      />
    </Router>
  ))
  .add('to left', () => (
    <Router>
      <SiteMenuBar
        menuList={menuListStandard}
        left="true"
      />
    </Router>
  ))
  .add('to left: long menus', () => (
    <Router>
      <SiteMenuBar
        menuList={menuListLong}
        left="true"
      />
    </Router>
  ))
  .add('sticky on top', () => (
    <Router>
      <SiteMenuBar
        menuList={menuListLong}
        stickyDirection="top"
      />
    </Router>
  ));
