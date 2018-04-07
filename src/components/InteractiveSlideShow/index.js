import React from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';
import SlideContainer from './style/SlideContainer';

export default function InteractiveSlideShow(props) {
  const {
    style,
    className,
    slidesList,
  } = props;
  return (
    <Container style={style} className={className}>
      {slidesList.map((slide) => {
        const {
          slideComponent,
          slideProps,
          id,
        } = slide;
        const SlideComponent = slideComponent;
        return (
          <SlideContainer key={id}>
            <SlideComponent {...slideProps} />
          </SlideContainer>
        );
      })}
    </Container>
  );
}

InteractiveSlideShow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  slidesList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

InteractiveSlideShow.defaultProps = {
  className: '',
  style: null,
};
