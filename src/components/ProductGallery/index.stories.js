import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  galleryImages,
  galleryImagesOnlyOne,
} from './../../../stories/fakeData';
import ProductGallery from './index';


storiesOf('Product Gallery', module)
  .add('stand alone', () => (
    <section style={
      {
 width: '500px',
      height: '500px',
      position: 'absolute',
}
    }
    >
      <ProductGallery
        images={galleryImages}
      />
    </section>
  ))
  .add('hide gallery when only 1 image', () => (
    <section style={
      {
width: '500px',
      height: '500px',
      position: 'absolute',
}
    }
    >
      <ProductGallery
        images={galleryImagesOnlyOne}
      />
    </section>
  ));
