import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';

export default class CenteredSpaceShell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
    } = this.props;
    return (
      <Container>
        {children}
      </Container>
    );
  }
}
