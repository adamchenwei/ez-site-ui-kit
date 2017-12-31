import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {
  Container,
  Link,
} from './style';
//import { Link } from 'react-router';

export default class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.props.toggleMenu
      ? this.props.toggleMenu.bind(this)
      : () => {return};
  }

  render() {
    let {
      path,
      title,
    } = this.props;
    const COMPONENT_NAME = 'MenuItem';
    return (
      <Container
        componentName={COMPONENT_NAME}
        gridAreaId={''}
        onClick={this.toggleMenu}>
        <Link href={path}>{title}</Link>
      </Container>
    );
  }
}
MenuItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  toggleMenu: PropTypes.func,
}