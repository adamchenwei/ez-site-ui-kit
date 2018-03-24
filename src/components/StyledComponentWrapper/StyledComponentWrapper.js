import React, { Component } from 'react'; import PropTypes from 'prop-types';

export default class StyledComponentWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      children,
    } = this.props;

    return (
      children
    );
  }
}
