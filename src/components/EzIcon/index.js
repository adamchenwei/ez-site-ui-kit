import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';

export default class EzIcon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {
      content,
      style,
      type,
    } = this.props;
    return (
      <Container>
        SUCCESS
      </Container>
    );
  }
}

EzIcon.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
};
