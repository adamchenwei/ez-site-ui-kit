import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import CollapseBar from './style/CollapseBar';
import NavBar from './style/NavBar';
import StyledNavItem from './style/StyledNavItem';

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
      className,
      menuList,
      children,
      left,
      textcasing,
    } = this.props;

    return (
      <Navbar style={style} className={className} color="faded" light expand="md">
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
                    <RouterLink className="nav-link" to={path}>{title}</RouterLink>
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
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  textcasing: PropTypes.string,
  menuList: PropTypes.arrayOf(PropTypes.any),
  children: PropTypes.node,
  left: PropTypes.string,

};
SiteMenuBar.defaultProps = {
  style: {},
  className: '',
  textcasing: null,
  menuList: [],
  children: null,
  left: null,
};
