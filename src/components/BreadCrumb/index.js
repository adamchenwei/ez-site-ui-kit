import React, { Component } from 'react';
import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import capToCamelCase from './../../util/transform/capToCamelCase';

import Container from './style/Container';
import HomeLink from './style/HomeLink';
export default class BreadCrumb extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {
      content,
      style,
      type,
    } = this.props;

    const componentCSSName = capToCamelCase('BreadCrumb');
    const containerLevelStyle = `${componentCSSName}__container`;

    const {
      title,
    } = this.props.content;
    //TODO: Link's to should be a prop!!!
    return (
      <Container>
        <HomeLink className={`${componentCSSName}__homeLink`} href='/products/all'>Home</HomeLink> / {title}
      </Container>
    );
  }
}
BreadCrumb.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
};