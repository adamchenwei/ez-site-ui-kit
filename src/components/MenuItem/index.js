import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  MenuLink,
} from './style';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    if (props.toggleMenu) {
      this.toggleMenu = props.toggleMenu;
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
        <MenuLink to={path}>{title}</MenuLink>
      </Container>
    );
  }
}
MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

