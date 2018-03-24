import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';

import GoogleEmbbededMapView from './../GoogleEmbbededMapView';
import ProductGallery from './../ProductGallery';
import get from 'lodash/get';
import ShareButtonsBar from './../ShareButtonsBar';
import SnapshotDisplay from './../SnapshotDisplay';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

export default class CatalogDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const PinterestIcon = generateShareIcon('pinterest');

    const {
      title,
      style,
      type,
      query,
      snapshots,
      displayLocation,
      website,
    } = this.props;
    const snapshotSrc = get(snapshots[0], 'url');
    return (

      <Container>
        <SnapshotDisplay
          title={title}
          displayLocation={displayLocation}
          snapshotSrc={snapshotSrc}
        />
        <GoogleEmbbededMapView
          query={query}
        />
        <ShareButtonsBar
          hasMarginBottom
          homeLink={website}
        />

      </Container>
    );
  }
}

CatalogDetail.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  displayLocation: PropTypes.string,
  type: PropTypes.string,
  query: PropTypes.string,
  snapshots: PropTypes.arrayOf(PropTypes.object),
};

CatalogDetail.defaultProps = {
  style: {},
  title: 'Detail',
  displayLocation: '',
  type: '',
  query: '',
  snapshots: [],
};
