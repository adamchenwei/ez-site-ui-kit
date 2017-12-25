import React, { Component, PropTypes } from 'react';

export default class Tester extends Component {
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
    const COMPONENT_NAME = 'Tester';
    return (
      <div>
        SUCCESS
      </div>
    );
  }
}
