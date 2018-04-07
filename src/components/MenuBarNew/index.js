import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import {
  Container,
  MenuItemBox,
  MenuItemLink,
} from './style';

import scrollToDom from './../../util/layout/scrollToDom';

export default class MenuBarNew extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const dom = this;
    if (this.props.scrollToHere) {
      const dom = ReactDOM.findDOMNode(this.MenuBarTop);
      scrollToDom(dom, 100);
    }
  }

  render() {
    const {
      menuItems,
      customStyles,
    } = this.props;
    const COMPONENT_NAME = 'MenuBarNew';
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
            <MenuItemBox key={index}>
              <MenuItemLink
                href={menuItem.path}
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

MenuBarNew.propTypes = {
  menuItems: PropTypes.array.isRequired,
  customStyles: PropTypes.object,
  scrollToHere: PropTypes.bool,
};
