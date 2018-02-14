import MobileMenu from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
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
} from './../MobileMenu/factory/menu';
const menuBarItems = buildMenuItems(2);
const filterBarItems = buildMenuFilterItems(6);
import {BrowserRouter as Router} from 'react-router-dom';

storiesOf(`
Mobile Menu
* Disappear on tablet size (768px+)
`, module)
.add('with actual data expanded', () => {
return (
  <Router>
    <MobileMenu
      siteName={'My Website'}
      isExpanded={true}
      menuItems={menuBarItems}
      filterItems={filterBarItems}>
    </MobileMenu>
  </Router>
)
})

.add('collapsed - empty state', () => {
return (
  <Router><MobileMenu
    siteName={''}
    menuItems={[]}
    filterItems={[]} /></Router>
)
})
.add('expanded - empty state', () => {
return (
  <Router><MobileMenu
    siteName={''}
    menuItems={[]}
    filterItems={[]}
    isExpanded={true} /></Router>
)
})
.add('collapsed', () => {
return (
  <Router><MobileMenu
    siteName={'My Website'}
    menuItems={MastMenuShort} /></Router>
)
})
.add('expanded', () => {
return (
  <Router><MobileMenu
    siteName={'My Website'}
    menuItems={MastMenuShort}
    isExpanded={true} /></Router>
)
})
.add('with filter, collapsed', () => {

return (
  <Router><MobileMenu
    siteName={'My Website'}
    menuItems={MastMenuShort}
    filterItems={MasterMenuLong} /></Router>
)
})
.add('with filter, expanded', () => {
return (
  <Router><MobileMenu
    siteName={'My Website'}
    isExpanded={true}
    menuItems={MastMenuShort}
    filterItems={MasterMenuLong}>
  </MobileMenu></Router>
)
})
.add('with filter and top bar, expanded', () => {
return (
  <DummyStager>
    <DummyBar />
    <Router><MobileMenu
      siteName={'My Website'}
      isExpanded={true}
      menuItems={MastMenuShort}
      filterItems={MasterMenuLong}>
    </MobileMenu></Router>
  </DummyStager>
)
})