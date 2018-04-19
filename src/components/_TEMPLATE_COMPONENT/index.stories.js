import React from 'react';
import { storiesOf } from '@storybook/react';
import TemplateComponent from './index';

storiesOf('Component/TemplateComponent/Stand Alone', module)
  .add('default', () => (
    <TemplateComponent />
  ));
