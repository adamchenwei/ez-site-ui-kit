import React from 'react';
import PropTypes from 'prop-types';

const AtomTemplateComponent = (props) => {
  const {
    className,
    style,
  } = props;
  return (
    <div style={style} className={className} >
      <h1>SUCCESS</h1>
    </div>
  );
};

AtomTemplateComponent.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

AtomTemplateComponent.defaultProps = {
  style: {},
  className: '',
};

export default AtomTemplateComponent;
