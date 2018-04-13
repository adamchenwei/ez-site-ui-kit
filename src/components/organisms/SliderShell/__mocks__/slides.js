import React from 'react';
import PositionedSlideShell from '../../PositionedSideShell';

const imageSourcePath1 = './placeholder/images/1040x700color515151.svg';
const imageSourcePath2 = './placeholder/images/1040x700color355952.svg';
const imageSourcePath3 = './placeholder/images/1040x700color373e7a.svg';

const slides = [
  {
    component: PositionedSlideShell,
    props: {
      title: 'Happy',
      subTitle: 'View Our Happy Slide',
      paragraph: 'we got this beautiful slide that is crazy good, please try it out yourself when you have time!',
      callToActionButtonConfig: {
        title: 'Click Me',
        link: 'https://www.google.com',
        customButtonComponent: () => <button>my custom button 1</button>,
        customButtonComponentProps: {},
      },
      imageSourcePath: imageSourcePath2,
    },
  },
  {
    component: PositionedSlideShell,
    props: {
      title: 'Enjoyable',
      subTitle: 'View Our Enjoyable Slide',
      paragraph: 'we got this beautiful slide that is crazy good, please try it out yourself when you have time!',
      callToActionButtonConfig: {
        title: 'Click Me',
        link: 'https://www.google.com',
        customButtonComponent: () => <button>my custom button 1</button>,
        customButtonComponentProps: {},
      },
      imageSourcePath: imageSourcePath1,
    },
  },
  {
    component: PositionedSlideShell,
    props: {
      title: 'Funny',
      subTitle: 'View Our Funny Slide',
      paragraph: 'we got this beautiful slide that is crazy good, please try it out yourself when you have time!',
      callToActionButtonConfig: {
        title: 'Click Me',
        link: 'https://www.google.com',
        customButtonComponent: () => <button>my custom button 1</button>,
        customButtonComponentProps: {},
      },
      imageSourcePath: imageSourcePath3,
    },
  },
];

export default {
  slides,
  imageSourcePath1,
  imageSourcePath2,
  imageSourcePath3,
};

