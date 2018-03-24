import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {
  Container,
  Link,
} from './style';
// import { Link } from 'react-router-dom';

export default class MenuFilterItem extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.props.toggleMenu.bind(this);
  }

  render() {
    const {
      path,
      title,
    } = this.props;
    const COMPONENT_NAME = 'MenuFilterItem';
    return (
      <Container
        onClick={this.toggleMenu}
        componentName={COMPONENT_NAME}
        gridAreaId=""
      >
        <Link to={path}>{title}</Link>
      </Container>
    );
  }
}
MenuFilterItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  toggleMenu: PropTypes.func,
};
