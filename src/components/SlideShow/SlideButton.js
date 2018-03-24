import React, { Component } from 'react'; import PropTypes from 'prop-types';
import { Container } from './style';

export default class SlideButton extends Component {
  constructor(props) {
    super(props);
    this.goSlide = this.goSlide.bind(this);
  }

  goSlide() {
    this.props.goToSlide(this.props.slideId);
  }

  render() {
    const {
      goToSlide,
      currentSlideId,
      slideId,
    } = this.props;
    const COMPONENT_NAME = 'SlideButton';
    const isCurrent = slideId === currentSlideId;
    return (
      <Container
        componentName={COMPONENT_NAME}
        gridAreaId=""
        onClick={this.goSlide}
        style={{
          opacity: isCurrent ? '.75' : '.25',
          alignSelf: 'center',
          marginLeft: '8px',
          marginRight: '8px',
          marginBottom: '16px',
        }}
      >
        &#8226;
      </Container>
    );
  }
}
SlideButton.propTypes = {
  goToSlide: PropTypes.func,
  slideId: PropTypes.number,
  currentSlideId: PropTypes.number,
};
