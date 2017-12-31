import React, { Component } from 'react'; import PropTypes from 'prop-types';
import SocialIcon from '../SocialButton/SocialIcon';
import {
  Container,
} from './style';

export default class FooterBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const icons = this.props.socialIcons || [];
    return (
      <Container>
      {icons.length
        ? icons.map((icon, index) => {
           return <SocialIcon
            key={index}
            srcUrl={icon.srcUrl}
            linkUrl={icon.linkUrl}
          />
        })
        : null}

      </Container>
    );
  }
}

FooterBar.propTypes = {
  socialIcons: PropTypes.array,
};
