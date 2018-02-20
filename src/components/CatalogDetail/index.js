import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';
import SnapshotContainer from './style/SnapshotContainer';
import Snapshot from './style/Snapshot';

import GoogleEmbbededMapView from './../GoogleEmbbededMapView';
import ProductGallery from './../ProductGallery';
import get from 'lodash/get';
import ShareButtonsBar from './../ShareButtonsBar';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
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

    let {
      style,
      type,
      query,
      snapshots,
    } = this.props;
    const snapshotSrc = get(snapshots[0], 'url');
    return (
      
      <Container>
        <SnapshotContainer>
          <Snapshot src={snapshotSrc} />
        </SnapshotContainer>
        <ShareButtonsBar hasMarginBottom/>
        <GoogleEmbbededMapView
          query={query}
        />
      </Container>
    );
  }
}

CatalogDetail.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  query: PropTypes.string,
  snapshots: PropTypes.arrayOf(PropTypes.object),
};

CatalogDetail.defaultProps = {
  style: {},
  type: '',
  query: '',
  snapshots: [],
};
