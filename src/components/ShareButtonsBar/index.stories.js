import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import ShareButtonsBar from './index';
import {COMPONENT, BOOTSTRAP} from '../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT}/${BOOTSTRAP}/Share Buttons Bar (DontTest)`, module)
  .add('default', () => <ShareButtonsBar />)
  .add('fixed width', () => <ShareButtonsBar style={{ width: '200px' }} />)
  .add('with link', () => <ShareButtonsBar homeLink="www" />);
