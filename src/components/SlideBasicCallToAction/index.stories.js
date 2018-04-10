import React from 'react';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
 //eslint-disable-line
import SlideBasicCallToAction from './index';

const imageSourcePath = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'; //eslint-disable-line
storiesOf('components/SlideBasicCallToAction', module)
  .add('default', () => (
    <section style={{ width: '100%', height: '200px' }}>
      <SlideBasicCallToAction
        title="Beautiful Slide"
        subTitle="Enjoy Our Beautiful Slide"
        paragraph="we got this beautiful slide that is crazy good, please try it out yourself when you have time!"
        callToActionButtonConfig={{
          title: 'Click Me',
          link: 'https://www.google.com',
          customButtonComponent: () => <button>my custom button</button>,
          customButtonComponentProps: {},
        }}
        imageSourcePath={imageSourcePath}
      />
    </section>));
