import React, { Component, PropTypes } from 'react';
import {
  Container,
} from './../Common';

export default class _TemplateComponent extends Component {
  static propTypes = {
    content: PropTypes.object,
    style: PropTypes.object,
    type: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {
      content,
      style,
      type,
    } = this.props;
    const COMPONENT_NAME = '_TemplateComponent';
    return (
      <Container
        componentName={COMPONENT_NAME}
        gridAreaId={''}>
        SUCCESS
      </Container>
    );
  }
}
