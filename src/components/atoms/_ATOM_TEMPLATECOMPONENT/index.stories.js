import React from 'react';
import { storiesOf } from '@storybook/react';
import AtomTemplateComponent from './index';

storiesOf('Component/Atom/AtomTemplateComponent/Stand Alone', module)
  .add('default', () => (
    <AtomTemplateComponent />
  ));
