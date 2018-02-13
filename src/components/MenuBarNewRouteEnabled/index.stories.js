import MenuBarNewRouteEnabled from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  buildMenuItems,
  buildMenuFilterItems,
} from './../MobileMenu/factory/menu';
import {DummyStager, DummyBar} from './../Common';
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
import {BrowserRouter as Router} from 'react-router-dom';

const menuBarItems = buildMenuItems(2);

storiesOf(`
Menu Bar New - RouteEnabled
`, module)
.add('standard amount of items', () => {
  return (
    <Router>
    <MenuBarNewRouteEnabled
      menuItems={menuBarItems} />
    </Router>
  )
})
// .add('standard amount of items with top and bottom neighbors', () => {
//   return (
//     <section>
//       <DummyBar />
//       <MenuBarNewRouteEnabled
//       menuItems={menuBarItems} />
//       <DummyBar />
//     </section>
//   )
// })
// .add('standard amount of items with top and bottom margin 32px & top and bottom neighbors', () => {
//   return (
//     <section>
//       <DummyBar />
//       <MenuBarNewRouteEnabled
//         customStyles={{
//           marginTop: '32px',
//           marginBottom: '32px',
//         }}
//         menuItems={menuBarItems} />
//       <DummyBar />
//     </section>
//   )
// })
// .add('no items should prevent menu bar from showing up', () => {
//   return (
//     <MenuBarNewRouteEnabled
//       menuItems={[]} />
//   )
// })
// .add('long items', () => {
//   return (
//     <MenuBarNewRouteEnabled
//       menuItems={MasterMenuLong} />
//   )
// })
// .add('long items that have long phrases', () => {
//   return (
//     <MenuBarNewRouteEnabled
//       menuItems={MasterMenuLongWithLongText} />
//   )
// })
// .add('massive amount of items!', () => {
//   return (
//     <MenuBarNewRouteEnabled
//       menuItems={MasterMenuExtremelyLong} />
//   )
// })
