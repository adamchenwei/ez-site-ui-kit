import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {
  Container,
} from './../Common';
import MenuItem from './../MenuItem';
import {ContentSynchronizer} from 'ez-site-content-store';
const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

export default class MenuItems extends Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.props.toggleMenu? this.props.toggleMenu.bind(this) : function(){return};
  }

  generatedMenuItems(items = []) {
    return items.map((item, index)=> {
      return <MenuItem
        toggleMenu={this.toggleMenu}
        path={item.path} title={item.title} key={index}/> || null;
    }) ;
  }

  render() {
    const menuItems =  this.props.menuItems || [
      {
        path: '/',
        title: 'Home',
      }
    ];

    const COMPONENT_NAME = 'MenuItems';
    const containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

    return (
      <Container
        componentName={containerName}
        gridAreaId={''}>
        {this.generatedMenuItems(menuItems)}
      </Container>
    )
  }
}
MenuItems.propTypes = {
  menuItems: PropTypes.array,
  toggleMenu: PropTypes.func,
}