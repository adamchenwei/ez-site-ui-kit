import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Link,
} from './style';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    if (props.toggleMenu) {
      this.toggleMenu = this.toggleMenu.bind(this);
    }
  }

  render() {
    const {
      path,
      title,
    } = this.props;
    const COMPONENT_NAME = 'MenuItem';
    return (
      <Container
        componentName={COMPONENT_NAME}
        gridAreaId=""
        onClick={this.toggleMenu}
      >
        <Link to={path}>{title}</Link>
      </Container>
    );
  }
}
MenuItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  toggleMenu: PropTypes.func,
};

