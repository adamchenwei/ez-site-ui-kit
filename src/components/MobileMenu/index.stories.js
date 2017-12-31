import MobileMenu from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  buildMenuItems,
  buildMenuFilterItems,
} from './../MobileMenu/factory/menu';
const menuBarItems = buildMenuItems(2);
const filterBarItems = buildMenuFilterItems(6);

storiesOf(`
Mobile Menu
* Disappear on tablet size (768px+)
`, module)
.add('with actual data expanded', () => {
return (
  <MobileMenu
    siteName={'My Website'}
    isExpanded={true}
    menuItems={menuBarItems}
    filterItems={filterBarItems}>
  </MobileMenu>
)
})

.add('collapsed - empty state', () => {
return (
  <MobileMenu
    siteName={''}
    menuItems={[]}
    filterItems={[]} />
)
})
.add('expanded - empty state', () => {
return (
  <MobileMenu
    siteName={''}
    menuItems={[]}
    filterItems={[]}
    isExpanded={true} />
)
})
.add('collapsed', () => {
return (
  <MobileMenu
    siteName={'My Website'}
    menuItems={MastMenuShort} />
)
})
.add('expanded', () => {
return (
  <MobileMenu
    siteName={'My Website'}
    menuItems={MastMenuShort}
    isExpanded={true} />
)
})
.add('with filter, collapsed', () => {

return (
  <MobileMenu
    siteName={'My Website'}
    menuItems={MastMenuShort}
    filterItems={MasterMenuLong} />
)
})
.add('with filter, expanded', () => {
return (
  <MobileMenu
    siteName={'My Website'}
    isExpanded={true}
    menuItems={MastMenuShort}
    filterItems={MasterMenuLong}>
  </MobileMenu>
)
})
.add('with filter and top bar, expanded', () => {
return (
  <DummyStager>
    <DummyBar />
    <MobileMenu
      siteName={'My Website'}
      isExpanded={true}
      menuItems={MastMenuShort}
      filterItems={MasterMenuLong}>
    </MobileMenu>
  </DummyStager>
)
})