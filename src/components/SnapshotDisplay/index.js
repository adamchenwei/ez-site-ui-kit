import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SnapshotContainer from './style/SnapshotContainer';
import Snapshot from './style/Snapshot';
import TitleContainer from './style/TitleContainer';
import Name from './style/Name';
import Address from './style/Address';

export default class SnapshotDisplay extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {
      title,
      displayLocation,
      snapshotSrc,
    } = this.props;
    return (
      <SnapshotContainer>
        {
          title || displayLocation ? <TitleContainer>
            <Name>{title}</Name>
            <Address>{displayLocation}</Address>
          </TitleContainer> : null
        }
        <Snapshot src={snapshotSrc} />
      </SnapshotContainer>
    );
  }
}

SnapshotDisplay.propTypes = {
  title: PropTypes.string,
  displayLocation: PropTypes.string,
  snapshotSrc: PropTypes.string,
};

SnapshotDisplay.defaultProps = {
  title: '',
  displayLocation: '',
  snapshotSrc: '',
};