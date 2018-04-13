import { storiesOf } from '@storybook/react';

import React from 'react';
import ShareButtonsBar from './index';
import { COMPONENT_LABEL, BOOTSTRAP } from '../../storybookonly/config/MENU_CATEGORIES';

storiesOf(`${COMPONENT_LABEL}/${BOOTSTRAP}/Share Buttons Bar (DontTest)`, module)
  .add('default', () => <ShareButtonsBar />)
  .add('fixed width', () => <ShareButtonsBar style={{ width: '200px' }} />)
  .add('with link', () => <ShareButtonsBar homeLink="www" />);
