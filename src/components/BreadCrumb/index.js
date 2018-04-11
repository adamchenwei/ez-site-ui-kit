import React from 'react';
import PropTypes from 'prop-types';
import capToCamelCase from './../../util/transform/capToCamelCase';

import Container from './style/Container';
import HomeLink from './style/HomeLink';

export default function BreadCrumb(props) {
  const {
    content,
  } = props;

  const componentCSSName = capToCamelCase('BreadCrumb');

  const {
    title,
  } = content;
  // TODO: Link's to should be a prop!!!
  return (
    <Container>
      <HomeLink className={`${componentCSSName}__homeLink`} href="/products/all">Home</HomeLink> / {title}
    </Container>
  );
}
BreadCrumb.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
};
