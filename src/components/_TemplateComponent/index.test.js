import _TemplateComponent from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('_TemplateComponent', module)
  .add('default', () => <_TemplateComponent />);
