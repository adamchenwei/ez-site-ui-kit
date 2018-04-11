import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Container from './style/Container';
import MenuItemBox from './style/MenuItemBox';
import MenuItemLink from './style/MenuItemLink';

import scrollToDom from './../../util/layout/scrollToDom';

export default class MenuBarNew extends Component {
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
            <MenuItemBox key={menuItem.id || index}>
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
  menuItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  customStyles: PropTypes.objectOf(PropTypes.any),
  scrollToHere: PropTypes.bool,
};

MenuBarNew.defaultProps = {
  customStyles: {},
  scrollToHere: false,
};
