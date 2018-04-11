import React, { Component } from 'react'; import PropTypes from 'prop-types';
import Container from './../Common/Container';
import MenuItem from './../MenuItem';

const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

export default class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.props.toggleMenu ? this.props.toggleMenu.bind(this) : () => {};
  }

  generatedMenuItems(items = []) {
    return items.map((item, index) => <MenuItem
      toggleMenu={this.toggleMenu}
      path={item.path}
      title={item.title}
      key={item.id || index}
    /> || null);
  }

  render() {
    const menuItems = this.props.menuItems || [
      {
        path: '/',
        title: 'Home',
      },
    ];

    const COMPONENT_NAME = 'MenuItems';
    const containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

    return (
      <Container
        componentName={containerName}
        gridAreaId=""
      >
        {this.generatedMenuItems(menuItems)}
      </Container>
    );
  }
}
MenuItems.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.any),
  toggleMenu: PropTypes.func,
};
MenuItems.defaultProps = {
  menuItems: [],
  toggleMenu: () => {},
};

