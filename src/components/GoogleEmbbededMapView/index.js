import React from 'react';
import PropTypes from 'prop-types';
import GOOGLE_EMBEDDED_MAP_API from './../../constants/GOOGLE_EMBEDDED_MAP_API';

export default function GoogleEmbbededMapView(props) {
  const {
    style,
    query,
    width,
    height,
    title,
  } = props;
  return (
    <iframe
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      style={style}
      src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_EMBEDDED_MAP_API}&q=${query}`}
      allowFullScreen
    />
  );
}

GoogleEmbbededMapView.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
  query: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

GoogleEmbbededMapView.defaultProps = {
  style: {},
  title: '',
  query: '',
  width: '100%',
  height: '100%',
};
