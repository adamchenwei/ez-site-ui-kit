import React from 'react';
import { storiesOf } from '@storybook/react';
import AtomTemplateComponent from './index';
import { COMPONENT, PURE } from '../../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT}/${PURE}/Atom/AtomTemplateComponent/Stand Alone`, module)
  .add('default', () => (
    <AtomTemplateComponent />
  ));
