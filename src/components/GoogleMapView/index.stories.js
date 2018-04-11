import { storiesOf } from '@storybook/react';
import React from 'react';
import GoogleMapView from './index';

storiesOf('GoogleMapView', module)
  .add('with 1 marker', () => (
    <GoogleMapView
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  ))
  .add('only map', () => (<GoogleMapView
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />));
