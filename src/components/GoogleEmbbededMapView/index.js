import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GOOGLE_EMBEDDED_MAP_API from './../../constants/GOOGLE_EMBEDDED_MAP_API';

export default class GoogleEmbbededMapView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      style,
      query,
      width,
      height,
    } = this.props;
    return (
      <iframe
        width={width}
        height={height}
        frameBorder="0"
        style={style}
        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_EMBEDDED_MAP_API}&q=${query}`}
        allowFullScreen
      />
    );
  }
}

GoogleEmbbededMapView.propTypes = {
  style: PropTypes.object,
  query: PropTypes.string,
  height: PropTypes.string,
};

GoogleEmbbededMapView.defaultProps = {
  style: {},
  query: '',
  width: '100%',
  height: '100%',
};
