import React, { Component } from 'react'; import PropTypes from 'prop-types';

export default class StyledComponentWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let {
      children,
    } = this.props;

    return (
      <section>
        {children}
      </section>
    );
  }
}
