import _TemplateContainer from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('_TemplateContainer', module)
.add('default', () => <_TemplateContainer />)
