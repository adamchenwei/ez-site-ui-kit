import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';
import LogoBox from './style/LogoBox';
import Logo from './style/Logo';

export default class LogoBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content.data;

    return (
      <Container>
        <LogoBox>
          <Logo src={content.logo.image.url} />
        </LogoBox>
      </Container>
    );
  }
}

LogoBar.propTypes = {
  content: PropTypes.object.isRequired,
  style: PropTypes.array,
  type: PropTypes.string,
};
