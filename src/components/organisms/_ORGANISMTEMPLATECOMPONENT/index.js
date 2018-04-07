import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Container from './style/Container';

const OrganismTemplateComponent = (props) => {
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

OrganismTemplateComponent.propTypes = {
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

OrganismTemplateComponent.defaultProps = {
  style: {},
  className: '',
};

export default OrganismTemplateComponent;
