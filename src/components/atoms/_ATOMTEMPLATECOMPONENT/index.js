import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Container from './style/Container';

const AtomTemplateComponent = (props) => {
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

AtomTemplateComponent.propTypes = {
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

AtomTemplateComponent.defaultProps = {
  style: {},
  className: '',
};

export default AtomTemplateComponent;
