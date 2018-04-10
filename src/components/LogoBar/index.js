import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';
import LogoBox from './style/LogoBox';
import Logo from './style/Logo';

export default function LogoBar(props) {
  const content = props.content.data;

  return (
    <Container>
      <LogoBox>
        <Logo src={content.logo.image.url} />
      </LogoBox>
    </Container>
  );
}

LogoBar.propTypes = {
  content: PropTypes.objectOf(PropTypes.shape({
    data: PropTypes.objectOf(PropTypes.any)
  })).isRequired,
};
