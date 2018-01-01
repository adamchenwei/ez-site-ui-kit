import NotificationBar from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

const mock = {
  data: {
    text: 'we are in opening sale!',
    link: 'http://naturalorchards.us',
    
  },
  type: 'textWithBarLink',
  showAsDefault: true, //TODO - use for fine config in the future
  style: [//MANDATORY: needed for inside component style
    'center-text',
  ],
};
storiesOf('NotificationBar', module)
.add('default', () => {
  return (
    <NotificationBar
      contentData={mock.data}
      contentStyle={mock.style}
      contentType={mock.type} />
  )
})
