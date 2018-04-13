import React from 'react';
import { storiesOf } from '@storybook/react';
import SlideBasicCallToAction from './index';
import { COMPONENT_LABEL, MOLECULE_LABEL, ES6 } from '../../../storybookonly/config/MENU_CATEGORIES';

const imageSourcePath = './placeholder/images/1040x700color515151.svg';

storiesOf(`${COMPONENT_LABEL}/${MOLECULE_LABEL}/${ES6}/SlideBasicCallToAction`, module)
  .addDecorator(story => (
    <div style={{ marginTop: '50px' }}>
      <section style={{ width: '100%', height: '450px' }}>
        {story()}
      </section>
    </div>
  ))
  .add('default', () => (
    <SlideBasicCallToAction
      title="Enjoyable"
      subTitle="View Our Beautiful Slide"
      paragraph="we got this beautiful slide that is crazy good, please try it out yourself when you have time!"
      callToActionButtonConfig={{
        title: 'Click Me',
        link: 'https://www.google.com',
        customButtonComponent: () => <button>my custom button</button>,
        customButtonComponentProps: {},
      }}
      imageSourcePath={imageSourcePath}
    />
  ));
