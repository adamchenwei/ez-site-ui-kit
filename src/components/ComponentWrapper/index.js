import React from 'react';
import PropTypes from 'prop-types';

export default function ComponentWrapper(props) {
  const {
    style,
    children,
  } = props;
  return (
    <section style={style}>
      {children}
    </section>
  );
}

ComponentWrapper.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

ComponentWrapper.defaultProps = {
  style: {
    container: {
      classes: [],
    },
  },
  children: null,
};
