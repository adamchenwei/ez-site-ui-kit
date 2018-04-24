import React from 'react'; import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';
import Container from './style/Container';
import IconHolder from './style/IconHolder';
import LinkIconContainer from './style/LinkIconContainer';
import getWindow from './../../util/get/getWindow';

const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

export default function ShareButtonsBar(props) {
  const {
    style,
    sharedImageUrl,
    sharedDescriptionText,
    hashtags,
    sharedTitle,
    homeLink,
    // moreLink,
  } = props;

  const {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    // VKShareButton,
    // OKShareButton,
    // RedditShareButton,
    // GooglePlusShareButton,
    // LinkedinShareButton,
    // TelegramShareButton,
    // WhatsappShareButton,
  } = ShareButtons;

  const COMPONENT_NAME = 'ShareButtonsBar';
  const containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

  const FacebookIcon = generateShareIcon('facebook');
  const TwitterIcon = generateShareIcon('twitter');
  const PinterestIcon = generateShareIcon('pinterest');
  const locationHref = getWindow()
    ? getWindow().location.href
    : '';
  const absoluteUrl = `${locationHref}${sharedImageUrl}`;

  // const {
  //   spreaker,
  //   mixler,
  // } = moreLink;

  return (
    <Container
      hasMarginBottom
      componentName={containerName}
      gridAreaId=""
      style={style}
    >
      {homeLink ?
        <IconHolder style={{ backgroundColor: '#11111108' }}>
          <LinkIconContainer href={homeLink}>
            {/* eslint-disable */}
            <a href={homeLink} />
            {/* eslint-enable */}
          </LinkIconContainer>
        </IconHolder> : null}
      <IconHolder>
        <FacebookShareButton
          url={locationHref}
          quote={sharedTitle}
        >
          <FacebookIcon size={32} />
        </FacebookShareButton>
      </IconHolder>

      <IconHolder>
        <TwitterShareButton url={locationHref}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
      </IconHolder>

      <IconHolder>
        <PinterestShareButton
          url={locationHref}
          description={sharedDescriptionText}
          media={absoluteUrl}
          hashtags={hashtags}
        >
          <PinterestIcon size={32} />
        </PinterestShareButton>
      </IconHolder>

    </Container>
  );
}

ShareButtonsBar.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  sharedImageUrl: PropTypes.string,
  sharedDescriptionText: PropTypes.string,
  hashtags: PropTypes.string,
  sharedTitle: PropTypes.string,
  homeLink: PropTypes.string,
  // moreLink: PropTypes.objectOf(PropTypes.object),
};

ShareButtonsBar.defaultProps = {
  style: {},
  sharedImageUrl: '',
  sharedDescriptionText: '',
  hashtags: '',
  sharedTitle: '',
  homeLink: '',
  // moreLink: {},
};
