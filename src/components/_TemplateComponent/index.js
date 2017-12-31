import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from './style';

export default class _TemplateComponent extends Component {

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

_TemplateComponent.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
};
