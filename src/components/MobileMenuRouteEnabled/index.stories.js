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

storiesOf(`
Mobile Menu Route Enabled
* Disappear on tablet size (768px+)
`, module)
.add('with actual data expanded', () => {
return (
  <Router><MobileMenuRouteEnabled
    siteName={'My Website'}
    isExpanded={true}
    menuItems={menuBarItems}
    filterItems={filterBarItems}>
  </MobileMenuRouteEnabled></Router>
)
})

// .add('collapsed - empty state', () => {
// return (
//   <MobileMenuRouteEnabled
//     siteName={''}
//     menuItems={[]}
//     filterItems={[]} />
// )
// })
// .add('expanded - empty state', () => {
// return (
//   <MobileMenuRouteEnabled
//     siteName={''}
//     menuItems={[]}
//     filterItems={[]}
//     isExpanded={true} />
// )
// })
// .add('collapsed', () => {
// return (
//   <MobileMenuRouteEnabled
//     siteName={'My Website'}
//     menuItems={MastMenuShort} />
// )
// })
// .add('expanded', () => {
// return (
//   <MobileMenuRouteEnabled
//     siteName={'My Website'}
//     menuItems={MastMenuShort}
//     isExpanded={true} />
// )
// })
// .add('with filter, collapsed', () => {

// return (
//   <MobileMenuRouteEnabled
//     siteName={'My Website'}
//     menuItems={MastMenuShort}
//     filterItems={MasterMenuLong} />
// )
// })
// .add('with filter, expanded', () => {
// return (
//   <MobileMenuRouteEnabled
//     siteName={'My Website'}
//     isExpanded={true}
//     menuItems={MastMenuShort}
//     filterItems={MasterMenuLong}>
//   </MobileMenuRouteEnabled>
// )
// })
// .add('with filter and top bar, expanded', () => {
// return (
//   <DummyStager>
//     <DummyBar />
//     <MobileMenuRouteEnabled
//       siteName={'My Website'}
//       isExpanded={true}
//       menuItems={MastMenuShort}
//       filterItems={MasterMenuLong}>
//     </MobileMenuRouteEnabled>
//   </DummyStager>
// )
// })