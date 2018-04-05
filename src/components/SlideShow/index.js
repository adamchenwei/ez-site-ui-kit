import React, { Component } from 'react'; import PropTypes from 'prop-types';

import Container from './style/Container';
import SlidesBox from './style/SlidesBox';
import SlideButtonsBox from './style/SlideButtonsBox';

import SlideButton from './SlideButton';

export default class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: this.props.slides ? 1 : 0,
      url: this.props.slides.length ? this.props.slides[0].content.url : '',
      currentSlideId: 0,
    };
    this.goToSlide = this.goToSlide.bind(this);
    this.slideLooper = null;
  }

  componentDidMount() {
    if (this.props.slides.length > 1) {
      this.startLoopingSlides();
    }
  }

  componentWillUnmount() {
    clearInterval(this.slideLooper);
  }

  startLoopingSlides() {
    const LOOP_INTERVAL = 10000;
    const TRANSITION_INTERVAL = 300;
    const LOOP_COUNT = this.props.slides.length - 1;
    const { slides } = this.props;

    let loopCounter = 0;

    this.slideLooper = setInterval(() => {
      let { url } = slides[loopCounter].content;

      setTimeout(() => {
        if (this.slideLooper) {
          this.setState({
            opacity: 0,
          });
        }
      }, TRANSITION_INTERVAL);

      setTimeout(() => {
        if (loopCounter >= LOOP_COUNT) {
          loopCounter = 0;
        } else {
          loopCounter += 1;
        }
        url = slides[loopCounter].content.url;
        if (this.slideLooper) {
          this.setState({
            url,
          });
        }
      }, TRANSITION_INTERVAL * 2.5);

      setTimeout(() => {
        url = slides[loopCounter].content.url;
        if (this.slideLooper) {
          this.setState({
            currentSlideId: slides[loopCounter].id,
            opacity: 1,
          });
        }
      }, TRANSITION_INTERVAL * 3.5);
    }, LOOP_INTERVAL);
  }

  goToSlide(keyValue) {
    if (!keyValue && keyValue !== 0) return;
    const { slides } = this.props;
    const currentSlide = slides.filter(slide => slide.id === keyValue);
    const slideUrl = currentSlide.length
      ? currentSlide[0].content.url
      : this.props.slides[0].content.url;

    if (this.slideLooper) {
      this.setState({
        url: slideUrl || '',
      });
    }
  }

  render() {
    const {
      slides,
    } = this.props;
    const COMPONENT_NAME = 'SlideShow';

    return (
      <Container
        componentName={COMPONENT_NAME}
        gridAreaId=""
        style={{
          width: '100%',
          overflow: 'hidden',
          marginBottom: '16px',
        }}
      >
        <SlidesBox style={{
          alignSelf: 'center',
          height: '100%',
          width: '100%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        >
          <img
            alt={this.state.url || ''}
            src={this.state.url || ''}
            style={{
            width: '100%',
            transition: 'opacity 300ms ease-in-out',
            opacity: `${this.state.opacity}`,
            cursor: 'default',
          }}
          />
        </SlidesBox>
        <SlideButtonsBox>
          {
            slides.map((slide, index) => (<SlideButton
              key={index}
              currentSlideId={this.state.currentSlideId}
              slideId={slide.id}
              goToSlide={this.goToSlide}
            />))
          }
        </SlideButtonsBox>
      </Container>
    );
  }
}

SlideShow.propTypes = {
  slides: PropTypes.array,
};
