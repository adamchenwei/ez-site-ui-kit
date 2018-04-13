import React from 'react';
import { storiesOf } from '@storybook/react';
import SliderShell from './index';
import { COMPONENT_LABEL, ES6, ORGANISM_LABEL } from '../../../storybookonly/config/MENU_CATEGORIES';
import SlideBasicCallToAction from './../../molecules/SlideBasicCallToAction';
// import PositionedSlideContainer from '../PositionedSideShell/style/PositionedSlideContainer';
import PositionedSlideShell from '../PositionedSideShell';
import {slides} from './__mocks__/slides'; //eslint-disable-line

const imageSourcePath1 = './placeholder/images/1040x700color515151.svg';
const imageSourcePath2 = './placeholder/images/1040x700color355952.svg';
const imageSourcePath3 = './placeholder/images/1040x700color373e7a.svg';


// class StateHolder extends Component {
//   constructor(props) {
//     this.state = {
//       slidesOrderedIdsList: props.slidesOrderedIdsList,
//     }
//   }

//   render() {
//     return (
//       <SliderShell>

//       </SliderShell>
//     )
//   }
// }

// const PositionedSlide = props => (
//   <PositionedSlideContainer>
//     <SlideBasicCallToAction {...props} />
//   </PositionedSlideContainer>
// );

// TODO - funny stuff, the same slides in slides file is making the slides disappear!!!!
// const SLIDES = slides;
const SLIDES = [
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


storiesOf(`${COMPONENT_LABEL}/${ES6}/${ORGANISM_LABEL}/SliderShell/Stand Alone`, module)
  .addDecorator(story => (
    <div style={{ marginTop: '50px' }}>
      <section style={{ width: '100%', height: '450px' }}>
        {story()}
      </section>
    </div>
  ))
  .add('default', () => (
    <SliderShell>
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
        imageSourcePath={imageSourcePath1}
      />
    </SliderShell>
  ))
  .add('3 slides: 1st slide / default', () => (
    <SliderShell
      slides={SLIDES}
    />
  ))
  .add('3 slides: 2nd slide', () => (
    <SliderShell
      slides={SLIDES}
      currentSlideIndex={1}
    />
  ))
  .add('3 slides: last slide', () => (
    <SliderShell
      slides={SLIDES}
      currentSlideIndex={2}
    />
  ));
