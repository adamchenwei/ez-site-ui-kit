import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Container from './style/Container';

import GoogleEmbbededMapView from './../GoogleEmbbededMapView';
import ShareButtonsBar from './../ShareButtonsBar';
import SnapshotDisplay from './../SnapshotDisplay';
// import {
//   ShareButtons,
//   ShareCounts,
//   generateShareIcon,
// } from 'react-share';

export default function CatalogDetail(props) {
  // const {
  //   FacebookShareButton,
  //   GooglePlusShareButton,
  //   LinkedinShareButton,
  //   TwitterShareButton,
  //   TelegramShareButton,
  //   WhatsappShareButton,
  //   PinterestShareButton,
  //   VKShareButton,
  //   OKShareButton,
  //   RedditShareButton,
  // } = ShareButtons;
  // const FacebookIcon = generateShareIcon('facebook');
  // const TwitterIcon = generateShareIcon('twitter');
  // const PinterestIcon = generateShareIcon('pinterest');

  const {
    title,
    query,
    snapshots,
    displayLocation,
    website,
  } = props;
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

CatalogDetail.propTypes = {
  title: PropTypes.string,
  displayLocation: PropTypes.string,
  query: PropTypes.string,
  snapshots: PropTypes.arrayOf(PropTypes.object),
  website: PropTypes.string,
};

CatalogDetail.defaultProps = {
  title: 'Detail',
  displayLocation: '',
  query: '',
  snapshots: [],
  website: '',
};
