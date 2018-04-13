import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Container from './style/Container';

const SliderShellAnimated = (props) => {
  const {
    className,
    style,
  } = props;
  return (
    <Container style={style} className={className} >
      SUCCESS
    </Container>
  );
};

SliderShellAnimated.propTypes = {
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

SliderShellAnimated.defaultProps = {
  style: {},
  className: '',
};

export default SliderShellAnimated;
