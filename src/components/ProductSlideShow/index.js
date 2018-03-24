import React, { Component } from 'react'; import PropTypes from 'prop-types';
import { Container } from './../Common';

export default class _TemplateComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      content,
      style,
      type,
    } = this.props;
    const COMPONENT_NAME = '_TemplateComponent';
    return (
      <Container
        componentName={COMPONENT_NAME}
        gridAreaId=""
      >
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
