import React from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';

export default function ATemplateComponent(props) {
  const {
    style,
    className,
  } = props;
  return (
    <Container style={style} className={className}>
      SUCCESS
    </Container>
  );
}

ATemplateComponent.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

ATemplateComponent.defaultProps = {
  className: '',
  style: null,
};
