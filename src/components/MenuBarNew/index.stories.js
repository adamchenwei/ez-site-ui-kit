import MenuBarNew from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  buildMenuItems,
  buildMenuFilterItems,
} from './../MobileMenu/factory/menu';
import { DummyStager, DummyBar } from './../Common';
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

const menuBarItems = buildMenuItems(2);

storiesOf(`
Menu Bar (New)
`, module)
  .add('standard amount of items', () => (
    <MenuBarNew
      menuItems={menuBarItems}
    />
  ))
  .add('standard amount of items with top and bottom neighbors', () => (
    <section>
      <DummyBar />
      <MenuBarNew
        menuItems={menuBarItems}
      />
      <DummyBar />
    </section>
  ))
  .add('standard amount of items with top and bottom margin 32px & top and bottom neighbors', () => (
    <section>
      <DummyBar />
      <MenuBarNew
        customStyles={{
          marginTop: '32px',
          marginBottom: '32px',
        }}
        menuItems={menuBarItems}
      />
      <DummyBar />
    </section>
  ))
  .add('no items should prevent menu bar from showing up', () => (
    <MenuBarNew
      menuItems={[]}
    />
  ))
  .add('long items', () => (
    <MenuBarNew
      menuItems={MasterMenuLong}
    />
  ))
  .add('long items that have long phrases', () => (
    <MenuBarNew
      menuItems={MasterMenuLongWithLongText}
    />
  ))
  .add('massive amount of items!', () => (
    <MenuBarNew
      menuItems={MasterMenuExtremelyLong}
    />
  ));
