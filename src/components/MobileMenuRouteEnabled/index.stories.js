import MobileMenuRouteEnabled from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  MasterMenuLong,
  MasterMenuLongWithLongText,
  MasterMenuExtremelyLong,
  MastMenuShort,
  galleryImages,
  galleryImagesOnlyOne,
  slidesMultiple,
  footerBarThreeIcons,
} from './../../../stories/fakeData';

import {
  buildMenuItems,
  buildMenuFilterItems,
} from './../MobileMenuRouteEnabled/factory/menu';

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
