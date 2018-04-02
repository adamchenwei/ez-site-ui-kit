import React from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';

export default function SiteAboutUsSection(props) {
  const {
    style,
    className,
  } = props;
  return (
    <Container style={style} className={className}>
      SUCCESS
    </Container>
  );
}

SiteAboutUsSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

SiteAboutUsSection.defaultProps = {
  className: '',
  style: null,
};
