import MobileMenuRouteEnabled from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

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
console.log('----')
console.log(menuBarItems);

const MOCK_MENU = [
  {path: '/',
    title: 'Home',
  },
  {path: '/contact',
    title: 'Contact',
  },
  {path: '/about',
    title: 'About',
  },
  {path: '/list',
    title: 'Masjids',
  },
];

storiesOf(`
Mobile Menu Route Enabled
* Disappear on tablet size (768px+)
`, module)
.add('with menu and filter items', () => {
  return (
    <Router><MobileMenuRouteEnabled
      siteName={'My Website'}
      isExpanded={true}
      menuItems={menuBarItems}
      filterItems={filterBarItems}>
    </MobileMenuRouteEnabled></Router>
  )
})
.add('with menu items only (enable custom filter)', () => {
  return (
    <Router><MobileMenuRouteEnabled
      siteName={'My Website'}
      isExpanded={true}
      menuItems={MOCK_MENU}
      isCustomMenuItems
      isCustomFilterItems />
    </Router>
  )
  })
.add('collapsed - empty state', () => {
return (

  <Router><MobileMenuRouteEnabled
    siteName={''}
    menuItems={[]}
    filterItems={[]} /></Router>
)
})
.add('expanded - empty state', () => {
return (
  <Router><MobileMenuRouteEnabled
    siteName={''}
    menuItems={[]}
    filterItems={[]}
    isExpanded={true} /></Router>
)
})
.add('collapsed', () => {
return (
  <Router><MobileMenuRouteEnabled
    siteName={'My Website'}
    menuItems={MastMenuShort} /></Router>
)
})
.add('expanded', () => {
return (
  <Router><MobileMenuRouteEnabled
    siteName={'My Website'}
    menuItems={MastMenuShort}
    isExpanded={true} /></Router>
)
})
.add('with filter, collapsed', () => {

return (
  <Router><MobileMenuRouteEnabled
    siteName={'My Website'}
    menuItems={MastMenuShort}
    filterItems={MasterMenuLong} /></Router>
)
})
.add('with filter, expanded', () => {
return (
  <Router><MobileMenuRouteEnabled
    siteName={'My Website'}
    isExpanded={true}
    menuItems={MastMenuShort}
    filterItems={MasterMenuLong}>
  </MobileMenuRouteEnabled></Router>
)
})
.add('with filter and top bar, expanded', () => {
return (
  <DummyStager>
    <DummyBar />
    <Router><MobileMenuRouteEnabled
      siteName={'My Website'}
      isExpanded={true}
      menuItems={MastMenuShort}
      filterItems={MasterMenuLong}>
    </MobileMenuRouteEnabled></Router>
  </DummyStager>
)
})