import React, { Component } from 'react'; import PropTypes from 'prop-types';
import Container from './style/Container';
import StyledLink from './style/Link';
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
        <StyledLink to={path}>{title}</StyledLink>
      </Container>
    );
  }
}
MenuFilterItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  toggleMenu: PropTypes.func.isRequired,
};

MenuFilterItem.defaultProps = {
  path: '',
  title: '',
};
