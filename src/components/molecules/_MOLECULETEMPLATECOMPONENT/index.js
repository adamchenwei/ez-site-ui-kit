import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Container from './style/Container';

const MoleculeTemplateComponent = (props) => {
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

MoleculeTemplateComponent.propTypes = {
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

MoleculeTemplateComponent.defaultProps = {
  style: {},
  className: '',
};

export default MoleculeTemplateComponent;
