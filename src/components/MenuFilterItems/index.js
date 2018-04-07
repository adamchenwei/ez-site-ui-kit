import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {
  Container,
  ItemsContainer,
  Header,
} from './style';
import MenuFilterItem from './../MenuFilterItem';

const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

export default class MenuFilterItems extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.props.toggleMenu
      ? this.props.toggleMenu.bind(this)
      : function () {

      };
  }

  generatedMenuFilterItems(items = []) {
    return items.map((item, index) => <MenuFilterItem toggleMenu={this.toggleMenu} path={item.path} title={item.title} key={index} /> || null);
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
  menuItems: PropTypes.array,
  toggleMenu: PropTypes.func,
};
