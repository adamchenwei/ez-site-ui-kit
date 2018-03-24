import React, { Component, PropTypes } from 'react';

export default class Tester extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
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
Tester.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
};
