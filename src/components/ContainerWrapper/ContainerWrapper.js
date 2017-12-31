//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-
import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import capToCamelCase from './../../util/transform/capToCamelCase';
import { Link } from 'react-router';
//TODO - imcomplete! Changed mind decided not to use this component yet!But potentially possible!s
export default class ContainerWrapper extends Component {
  constructor(props) {
    super(props);
  }
//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-
  render() {
    require('./ContainerWrapper.scss');
    const style = concatCssClasses(this.props.style);
    const componentCSSName = capToCamelCase('ContainerWrapper');
    const containerLevelStyle = `${componentCSSName}__container ${style}`;
    const {
      title,
    } = this.props.content;

    return (
      <section className={containerLevelStyle}>

      </section>
    );
  }
}

ContainerWrapper.propTypes = {
  content: PropTypes.object,
  style: PropTypes.array,
  type: PropTypes.string,
};
//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-//DEPRECATED-