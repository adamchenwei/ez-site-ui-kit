import React, { Component } from 'react';
import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import capToCamelCase from './../../util/transform/capToCamelCase';

export default class ComponentWrapper extends Component { 

  constructor(props) {
    super(props);
  }

  render() {

    let {
      style,
      containerLevelStyle,
      children,
    } = this.props;

    if (!style) {
      style = {
        container: {
          classes: [],
        }
      }
    }
    containerLevelStyle = containerLevelStyle || 'component__container';
    return (
      <section className={containerLevelStyle} style={style}>
        {children}
      </section>
    );
  }
};

ComponentWrapper.propTypes = {
  style: PropTypes.object,
  containerLevelClass: PropTypes.string,
};