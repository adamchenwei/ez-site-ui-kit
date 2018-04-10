import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Container from './style/Container';
import MenuItemBox from './style/MenuItemBox';
import MenuItemLink from './style/MenuItemLink';
import scrollToDom from './../../util/layout/scrollToDom';

export default class MenuBarNewRouteEnabled extends Component {

  componentDidMount() {
    let dom = this;
    if (this.props.scrollToHere) {
      dom = ReactDOM.findDOMNode(this.MenuBarTop);//eslint-disable-line
      scrollToDom(dom, 100);
    }
  }

  render() {
    const {
      menuItems,
      customStyles,
    } = this.props;
    const COMPONENT_NAME = 'MenuBarNewRouteEnabled';
    return (
      <Container
        style={customStyles}
        componentName={COMPONENT_NAME}
        ref={(element) => {
          this.MenuBarTop = element;
        }}
        gridAreaId=""
      >
        {
          menuItems.map((menuItem, index) => (
            <MenuItemBox key={menuItem.id || index}>
              <MenuItemLink
                to={menuItem.path}
              >
                {menuItem.title}
              </MenuItemLink>
            </MenuItemBox>
            ))
        }
      </Container>
    );
  }
}

MenuBarNewRouteEnabled.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  customStyles: PropTypes.objectOf(PropTypes.any),
  scrollToHere: PropTypes.bool,
};

MenuBarNewRouteEnabled.defaultProps = {
  customStyles: {},
  scrollToHere: false,
};