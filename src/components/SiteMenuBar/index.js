import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';
import MenuItemCol from './style/MenuItemCol';
import CollapseBar from './style/CollapseBar';
import NavBar from './style/NavBar';
import StyledNavItem from './style/StyledNavItem';


// import {Col, Row} from 'reactstrap';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default class SiteMenuBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {
      style,
      menuList,
      menuItemResponsiveConfig,
      children,
      left,
      textcasing,
    } = this.props;

    return (
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">{children || 'Website Name'}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <CollapseBar left={left} isOpen={this.state.isOpen} navbar>
          <NavBar className="ml-auto" navbar>
            {
              menuList.map((menuItem) => {
                const {
                  title,
                  path,
                  id,
                } = menuItem;
                return (
                  <StyledNavItem key={id} textcasing={textcasing}>
                    <Link className="nav-link" to={path}>{title}</Link>
                  </StyledNavItem>
                  );
              })
            }
            {/* TODO: inNavbar warning - https://github.com/reactstrap/reactstrap/issues/770#issuecomment-356472250 */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </NavBar>
        </CollapseBar>
      </Navbar>
    );
  }
}

SiteMenuBar.propTypes = {
  style: PropTypes.object,
  textcasing: PropTypes.string,
};
SiteMenuBar.defaultProps = {
  style: {},
  textcasing: null,
};
