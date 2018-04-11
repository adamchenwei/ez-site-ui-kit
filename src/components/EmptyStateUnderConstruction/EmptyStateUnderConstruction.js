import React from 'react';
import PropTypes from 'prop-types';
import capToCamelCase from './../../util/transform/capToCamelCase';

export default function EmptyStateUnderConstruction(props) {
  // TODO - refactor, or different solution
  require('./EmptyStateUnderConstruction.scss'); //eslint-disable-line

  const {
    style,
  } = props;

  const componentCSSName = capToCamelCase('EmptyStateUnderConstruction');
  const containerLevelStyle = `${componentCSSName}__container`;

  return (
    <section className={containerLevelStyle} style={style.container.inlineStyles}>
      <div className="object">
        <div className="object-rope" />
        <div className="object-shape">
            Coming <span className="soon">Soon</span><br />
            in shaa Allah
        </div>
      </div>
    </section>
  );
}

EmptyStateUnderConstruction.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
};
EmptyStateUnderConstruction.defaultProps = {
  style: {
    container: {
      classes: [],
    },
  },
};
