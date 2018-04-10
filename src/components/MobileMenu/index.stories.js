import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import {
  MasterMenuLong,
  MastMenuShort,
} from './../../../stories/fakeData';
import MobileMenu from './index';

import {
  buildMenuItems,
  buildMenuFilterItems,
} from './../MobileMenu/factory/menu';
import DummyStager from './../Common/Dummy/DummyStager';
import DummyBar from './../Common/Dummy/DummyBar';

const menuBarItems = buildMenuItems(2);
const filterBarItems = buildMenuFilterItems(6);

storiesOf(`
Mobile Menu
* Disappear on tablet size (768px+)
`, module)
  .add('with actual data expanded', () => (
    <Router>
      <MobileMenu
        siteName="My Website"
        isExpanded
        menuItems={menuBarItems}
        filterItems={filterBarItems}
      />
    </Router>
  ))

  .add('collapsed - empty state', () => (
    <Router><MobileMenu
      siteName=""
      menuItems={[]}
      filterItems={[]}
    />
    </Router>
  ))
  .add('expanded - empty state', () => (
    <Router><MobileMenu
      siteName=""
      menuItems={[]}
      filterItems={[]}
      isExpanded
    />
    </Router>
  ))
  .add('collapsed', () => (
    <Router><MobileMenu
      siteName="My Website"
      menuItems={MastMenuShort}
    />
    </Router>
  ))
  .add('expanded', () => (
    <Router><MobileMenu
      siteName="My Website"
      menuItems={MastMenuShort}
      isExpanded
    />
    </Router>
  ))
  .add('with filter, collapsed', () => (
    <Router><MobileMenu
      siteName="My Website"
      menuItems={MastMenuShort}
      filterItems={MasterMenuLong}
    />
    </Router>
  ))
  .add('with filter, expanded', () => (
    <Router><MobileMenu
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
      <Router><MobileMenu
        siteName="My Website"
        isExpanded
        menuItems={MastMenuShort}
        filterItems={MasterMenuLong}
      />
      </Router>
    </DummyStager>
  ));
