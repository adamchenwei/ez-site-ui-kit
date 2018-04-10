import { storiesOf } from '@storybook/react';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MobileMenuRouteEnabled from './index';
import {
  MasterMenuLong,
  MastMenuShort,
} from './../../../stories/fakeData';

import {
  buildMenuItems,
  buildMenuFilterItems,
} from './../MobileMenuRouteEnabled/factory/menu';
import DummyStager from './../Common/Dummy/DummyStager';
import DummyBar from './../Common/Dummy/DummyBar';

const menuBarItems = buildMenuItems(2);
const filterBarItems = buildMenuFilterItems(6);

const MOCK_MENU = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/list',
    title: 'Masjids',
  },
];

storiesOf(`
Mobile Menu Route Enabled
* Disappear on tablet size (768px+)
`, module)
  .add('with menu and filter items', () => (
    <Router><MobileMenuRouteEnabled
      siteName="My Website"
      isExpanded
      menuItems={menuBarItems}
      filterItems={filterBarItems}
    />
    </Router>
  ))
  .add('with menu items only (enable custom filter)', () => (
    <Router><MobileMenuRouteEnabled
      siteName="My Website"
      isExpanded
      menuItems={MOCK_MENU}
      isCustomMenuItems
      isCustomFilterItems
    />
    </Router>
  ))
  .add('collapsed - empty state', () => (

    <Router><MobileMenuRouteEnabled
      siteName=""
      menuItems={[]}
      filterItems={[]}
    />
    </Router>
  ))
  .add('expanded - empty state', () => (
    <Router><MobileMenuRouteEnabled
      siteName=""
      menuItems={[]}
      filterItems={[]}
      isExpanded
    />
    </Router>
  ))
  .add('collapsed', () => (
    <Router><MobileMenuRouteEnabled
      siteName="My Website"
      menuItems={MastMenuShort}
    />
    </Router>
  ))
  .add('expanded', () => (
    <Router><MobileMenuRouteEnabled
      siteName="My Website"
      menuItems={MastMenuShort}
      isExpanded
    />
    </Router>
  ))
  .add('with filter, collapsed', () => (
    <Router><MobileMenuRouteEnabled
      siteName="My Website"
      menuItems={MastMenuShort}
      filterItems={MasterMenuLong}
    />
    </Router>
  ))
  .add('with filter, expanded', () => (
    <Router><MobileMenuRouteEnabled
      siteName="My Website"
      isExpanded
      menuItems={MastMenuShort}
      filterItems={MasterMenuLong}
    />
    </Router>
  ))
  .add('with filter and top bar, expanded', () => (
    <DummyStager>
      <DummyBar />
      <Router><MobileMenuRouteEnabled
        siteName="My Website"
        isExpanded
        menuItems={MastMenuShort}
        filterItems={MasterMenuLong}
      />
      </Router>
    </DummyStager>
  ));
