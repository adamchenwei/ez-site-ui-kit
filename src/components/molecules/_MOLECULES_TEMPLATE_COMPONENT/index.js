import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const MoleculesTemplateComponent = (props) => {
  const {
    val,
    className,
    style,
  } = props;
  return <h1 style={style} className={className} >Success {val}</h1>;
};

MoleculesTemplateComponent.propTypes = {
  val: PropTypes.string,
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

MoleculesTemplateComponent.defaultProps = {
  val: '',
  style: {},
  className: '',
};

export default MoleculesTemplateComponent;
