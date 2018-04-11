import React from 'react'; import PropTypes from 'prop-types';
import SocialIcon from '../SocialButton/SocialIcon';
import Container from './style/Container';

export default function FooterBar(props) {
  const icons = props.socialIcons || [];
  return (
    <Container>
      {icons.length
      ? icons.map((icon, index) => (<SocialIcon
        key={icon.id || index}
        srcUrl={icon.srcUrl}
        linkUrl={icon.linkUrl}
      />))
      : null}

    </Container>
  );
}

FooterBar.propTypes = {
  socialIcons: PropTypes.arrayOf(PropTypes.any).isRequired,
};
