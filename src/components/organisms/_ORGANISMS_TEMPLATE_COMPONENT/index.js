import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const OrganismsTemplateComponent = (props) => {
  const {
    val,
    className,
    style,
  } = props;
  return <h1 style={style} className={className} >Success {val}</h1>;
};

OrganismsTemplateComponent.propTypes = {
  val: PropTypes.string,
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

OrganismsTemplateComponent.defaultProps = {
  val: '',
  style: {},
  className: '',
};

export default OrganismsTemplateComponent;
