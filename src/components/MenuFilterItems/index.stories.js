import MenuFilterItems from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  MasterMenuLong,
} from './../../../stories/fakeData';

storiesOf('Menu Filter Items', module)
.add('stand alone', () => {
  return (
    <MenuFilterItems
      menuItems={MasterMenuLong}
    />
  )
})
