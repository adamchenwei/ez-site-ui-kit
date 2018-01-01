import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {
  Container,
  MenuToggleButton,
  // MobileMenuItem,
  MenuButtonSpan,
  SiteNameTitle,
  TitleSpan,
} from './style';

import {
  buildMenuItems,
  buildMenuFilterItems,
  buildProductMenuItems,
} from './factory/menu';

import {
  EmptyStateHelperText,
} from './../Common';

import DropDownMenu from './../DropDownMenu';
import MenuFilterItems from './../MenuFilterItems';
import MenuItems from './../MenuItems';

const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');
const smartEnvSiteUrl = require('../../util/dev/smartEnvSiteUrl');

export default class MobileMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAnimation () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    let {
      content,
      style,
      type,
      siteName,
      isExpanded,
      filterItems,
      menuItems,
    } = this.props;
    const isOpen = isExpanded || this.state.isOpen;
    const COMPONENT_NAME = 'MobileMenu';
    const containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

    //was filter but now its becoming just specific items ONLY
    //filterItems = buildMenuFilterItems(6) || [];
    filterItems = buildProductMenuItems(10).sort((a, b) => {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }) || [];
    menuItems = buildMenuItems(2) || [];

    return (
      <Container
        componentName={containerName}
        gridAreaId={''}
        style={{
          backgroundColor: '#212121',
          paddingTop: '14px',
        }}>
        <MenuToggleButton
          componentName={'menuToggleButton'}
          onClick={this.toggleAnimation}>
          <MenuButtonSpan>
            &#9776;
          </MenuButtonSpan>
        </MenuToggleButton>
        <TitleSpan gridAreaId={'site-name-title'}
          style={{
            textAlign: 'center',
            color: 'white',
            textTransform: 'uppercase',
          }}>
          {siteName || 'My Website'}
        </TitleSpan>
        <DropDownMenu isOpen={isOpen}
          componentName={'collapsibleMenu'}>
          {
            filterItems.length
            ? <MenuFilterItems
                menuItems={filterItems}
                toggleMenu={this.toggleAnimation} />
            : null
          }
          {
            menuItems.length
            ? <MenuItems
                menuItems={menuItems}
                toggleMenu={this.toggleAnimation} />
            :  <EmptyStateHelperText color='white' fontSize='25px'> Lets add some menu items!</EmptyStateHelperText>
          }

          {/* {this.props.children} */}
        </DropDownMenu>
      </Container>
    );
  }
}

MobileMenu.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  siteName: PropTypes.string,
  filterItems: PropTypes.array,
  menuItems: PropTypes.array,
}