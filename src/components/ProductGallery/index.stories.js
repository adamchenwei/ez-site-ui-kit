import ProductGallery from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  galleryImages,
  galleryImagesOnlyOne,
} from './../../../stories/fakeData';


storiesOf('Product Gallery', module)
.add('stand alone', () => {
  return (
    <section style={
      {width: '500px',
      height: '500px',
      position: 'absolute',}
    }>
      <ProductGallery
        images={galleryImages}
      />
    </section>
  )
})
.add('hide gallery when only 1 image', () => {
  return (
    <section style={
      {width: '500px',
      height: '500px',
      position: 'absolute',}
    }>
      <ProductGallery
        images={galleryImagesOnlyOne}
      />
    </section>
  )
})