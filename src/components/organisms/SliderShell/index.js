import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Container from './style/Container';

const SliderShell = (props) => {
  const {
    className,
    style,
    children,
    slides,
    currentSlideIndex,
  } = props;

  function showSlides() {
    return slides.map((slide, index) => {
      const Slide = slide.component;
      const slideProps = slide.props;
      const zIndexLevel = 890 + index;
      return (
        <Slide
          {...slideProps}
          key={slide.id || index}
          style={{
            zIndex: zIndexLevel,
            opacity: index === currentSlideIndex ? 1 : 0,
            transition: 'opacity 500ms linear',
          }}
        />);
    });
    // const ASlide = slides[0];
    // return <h1> <ASlide /></h1>;
  }
  return (
    <Container style={style} className={className} >
      {children || showSlides()}
    </Container>
  );
};

SliderShell.propTypes = {
  currentSlideIndex: PropTypes.number,
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
  children: PropTypes.node,
  slides: PropTypes.arrayOf(PropTypes.any),
};

SliderShell.defaultProps = {
  currentSlideIndex: 0,
  style: {},
  className: '',
  children: null,
  slides: [],
};

export default SliderShell;
