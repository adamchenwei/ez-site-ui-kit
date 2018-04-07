import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import ProductDisplay from './index';
import {COMPONENT, BOOTSTRAP} from '../../storybookonly/config/MENU_CATEGORIES';


const mock = {
  productName: 'product',
  content: {
    id: 3,
    name: 'premium-sun-dried-mulberries',
    title: 'Premium Sun Dried Mulberries',
    shortTitle: 'Mulberries',
    tags: [
      'mulberry',
      'fruit',
    ],
    route: {
      name: 'premium-sun-dried-mulberries',
    },
    description: 'Our Premium sun-dried Mulberries are the finest naturally grown mulberries – a\n    superfruit packed with vitamin C and antioxidants. Our mulberries are hand-\n    picked from orchards largely untouched by man and protected by mother\n    nature. The exceptional flavor of our Mulberries is directly attributable to the\n    unique climate, soil and water runoff from the Hindu Kush mountains – the\n    primary source of irrigation for the pristine orchards from which we source our Premium Mulberries.',
    properties: {
      ingredients: 'Natural sun-dried Mulberries – (unsulfured) no preservatives,\n      chemicals or additives.',
      allergyInformation: 'This product was packaged in a facility that handles tree\n      nuts.',
      storageInformation: 'Once opened - recommended to refrigerate.',
      nutritionFactLabel: {
        image: {
          label: 'nutrition',
          url: '',
        },
      },
      distributedBy: 'Natural Orchards, LLC',
      madeIn: 'Product of Afghanistan',
    },
    price: {
      regular: 0,
      sale: 0,
    },
    availableQuantity: 99999,
    slideShow: [
      {
        name: 'front',
        images: [
          {
            url: '/assets/images/products/Mulberries 1.jpg',
          },
          {
            url: '/assets/images/products/Mulberries 2.jpg',
          },
          {
            url: '/assets/images/products/Mulberries 3.jpeg',
          },
          {
            url: '/assets/images/products/Mulberries 4.jpg',
          },
          {
            url: '/assets/images/products/Mulberries 5.jpg',
          },
        ],
      },
    ],
    collectionName: 'products',
  },
  contentStyle: [],
};
storiesOf(`${COMPONENT}/${BOOTSTRAP}/ProductDisplay (DontTest)`, module)
  .add('default', () => <ProductDisplay productName={mock.productName} content={mock.content} contentStyle={[]} />);
