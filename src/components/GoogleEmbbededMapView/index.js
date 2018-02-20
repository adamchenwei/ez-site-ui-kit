import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GOOGLE_EMBEDDED_MAP_API from './../../constants/GOOGLE_EMBEDDED_MAP_API';

export default class GoogleEmbbededMapView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {
      style,
      query,
    } = this.props;
    return (
      <iframe
        width="100%"
        height="450"
        frameBorder="0" style={style}
        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_EMBEDDED_MAP_API}&q=${query}`} allowFullScreen>
      </iframe>
    );
  }
}

GoogleEmbbededMapView.propTypes = {
  style: PropTypes.object,
  query: PropTypes.string,
};
