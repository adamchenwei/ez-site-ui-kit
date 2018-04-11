import React, { Component } from 'react'; import PropTypes from 'prop-types';
import Container from './style/Container';
import MenuToggleButton from './style/MenuToggleButton';
import MenuButtonSpan from './style/MenuButtonSpan';
import TitleSpan from './style/TitleSpan';

import {
  buildMenuItems,
  buildProductMenuItems,
} from './factory/menu';

import EmptyStateHelperText from './../Common/EmptyStateHelperText';

import DropDownMenu from './../DropDownMenu';
import MenuFilterItems from './../MenuFilterItems';
import MenuItems from './../MenuItems';

const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {
      siteName,
      isExpanded,
    } = this.props;
    let {
      filterItems,
      menuItems,
    } = this.props;
    const isOpen = isExpanded || this.state.isOpen;
    const COMPONENT_NAME = 'MobileMenu';
    const containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

    // was filter but now its becoming just specific items ONLY
    // filterItems = buildMenuFilterItems(6) || [];
    filterItems = buildProductMenuItems(10).sort((a, b) => {
      const textA = a.title.toUpperCase();
      const textB = b.title.toUpperCase();
      if (textA < textB) {
        return -1;
      } else if (textA > textB) {
        return 1;
      }
      return 0;
    }) || [];
    menuItems = buildMenuItems(2) || [];

    return (
      <Container
        componentName={containerName}
        gridAreaId=""
        style={{
          backgroundColor: '#212121',
          paddingTop: '14px',
        }}
      >
        <MenuToggleButton
          componentName="menuToggleButton"
          onClick={this.toggleAnimation}
        >
          <MenuButtonSpan>
            &#9776;
          </MenuButtonSpan>
        </MenuToggleButton>
        <TitleSpan
          gridAreaId="site-name-title"
          style={{
            textAlign: 'center',
            color: 'white',
            textTransform: 'uppercase',
          }}
        >
          {siteName || 'My Website'}
        </TitleSpan>
        <DropDownMenu
          isOpen={isOpen}
          componentName="collapsibleMenu"
        >
          {
            filterItems.length
            ? <MenuFilterItems
              menuItems={filterItems}
              toggleMenu={this.toggleAnimation}
            />
            : null
          }
          {
            menuItems.length
            ? <MenuItems
              menuItems={menuItems}
              toggleMenu={this.toggleAnimation}
            />
            : <EmptyStateHelperText color="white" fontSize="25px"> Lets add some menu items!</EmptyStateHelperText>
          }

          {/* {this.props.children} */}
        </DropDownMenu>
      </Container>
    );
  }
}

MobileMenu.propTypes = {
  siteName: PropTypes.string,
  filterItems: PropTypes.arrayOf(PropTypes.any),
  menuItems: PropTypes.arrayOf(PropTypes.any),
  isExpanded: PropTypes.bool,
};

MobileMenu.defaultProps = {
  siteName: '',
  filterItems: [],
  menuItems: [],
  isExpanded: false,
};
