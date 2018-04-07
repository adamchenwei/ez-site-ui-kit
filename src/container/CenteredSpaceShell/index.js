import React from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';

export default function CenteredSpaceShell(props) {
  const {
    children,
  } = props;
  return (
    <Container>
      {children}
    </Container>
  );
}

CenteredSpaceShell.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
