import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {
  Container,
  IconHolder,
} from './style';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

export default class ShareButtonsBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {
      content,
      style,
      type,
      sharedImageUrl,
      sharedDescriptionText,
      hashtags,
      sharedTitle,
    } = this.props;

    const {
      FacebookShareButton,
      GooglePlusShareButton,
      LinkedinShareButton,
      TwitterShareButton,
      TelegramShareButton,
      WhatsappShareButton,
      PinterestShareButton,
      VKShareButton,
      OKShareButton,
      RedditShareButton,
    } = ShareButtons;

    const COMPONENT_NAME = 'ShareButtonsBar';
    const containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const PinterestIcon = generateShareIcon('pinterest');
    const locationHref = window
      ? window.location.href
      : '';
    const absoluteUrl = `${locationHref}${sharedImageUrl}`;

    return (
      <Container
        componentName={containerName}
        gridAreaId={''} style={style}>
        <IconHolder>
          <FacebookShareButton url={locationHref}
            quote={sharedTitle}>
            <FacebookIcon size={32} />
          </FacebookShareButton>
        </IconHolder>

        <IconHolder>
          <TwitterShareButton url={locationHref}>
            <TwitterIcon size={32} />
          </TwitterShareButton>
        </IconHolder>

        <IconHolder>
          <PinterestShareButton url={locationHref}
            description={sharedDescriptionText}
            media={absoluteUrl}
            hashtags={hashtags}>
            <PinterestIcon size={32}/>
          </PinterestShareButton>
        </IconHolder>

      </Container>
    );
  }
}

ShareButtonsBar.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  sharedImageUrl: PropTypes.string,
  sharedDescriptionText: PropTypes.string,
  hashtags: PropTypes.string,
  sharedTitle: PropTypes.string,
}