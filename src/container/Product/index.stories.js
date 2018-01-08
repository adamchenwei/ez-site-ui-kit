import Product from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

// const mock = {
//   "history": {},
//   "location": {
//     "pathname": "/products/specific/premium-raw-pistachios",
//     "search": "",
//     "hash": "",
//     "state": null,
//     "action": "POP",
//     "key": null,
//     "query": {},
//     "$searchBase": {
//       "search": "",
//       "searchBase": ""
//     }
//   },
//   "params": {
//     "productRef": "premium-raw-pistachios"
//   },
//   "route": {
//     "path": "/products/specific/:productRef"
//   },
//   "routeParams": {
//     "productRef": "premium-raw-pistachios"
//   },
//   "routes": [
//     {
//       "path": "/products/specific/:productRef"
//     }
//   ],
//   "children": null,
//   "router": {
//     "__v2_compatible__": true
//   }
// };
storiesOf('Product', module)
.add('default', () => <Product
  productRef={'premium-raw-pistachios'}/>)
