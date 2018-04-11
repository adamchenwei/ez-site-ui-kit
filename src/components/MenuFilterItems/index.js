import React, { Component } from 'react'; import PropTypes from 'prop-types';
import Container from './style/Container';
import ItemsContainer from './style/ItemsContainer';
import Header from './style/Header';
import MenuFilterItem from './../MenuFilterItem';

const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

export default class MenuFilterItems extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.props.toggleMenu
      ? this.props.toggleMenu.bind(this)
      : () => {};
  }

  generatedMenuFilterItems(items = []) {
    return items.map((item, index) => <MenuFilterItem
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

    const COMPONENT_NAME = 'MenuFilterItems';
    const containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

    return (
      <Container
        componentName={containerName}
        gridAreaId=""
      >
        <Header> filter by:</Header>
        <ItemsContainer>
          {this.generatedMenuFilterItems(menuItems)}
        </ItemsContainer>
      </Container>
    );
  }
}
MenuFilterItems.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.any),
  toggleMenu: PropTypes.func,
};
MenuFilterItems.defaultProps = {
  menuItems: [],
  toggleMenu: () => {},
};

