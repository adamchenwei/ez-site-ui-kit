import assets from './assets';
import grids from './grids';
import menus from './menus';
import pages from './pages';
import site from './site';
import products from './products';
import banners from './banners';
import footer from './footer';

export default {
  //each node is a collection
    //each collection MUST BE an array
      //each collection item MUST HAVE itemId (can custom name)
  site: site,
  menus: menus,
  pages: pages,
  gridContainerProperties: [
    'abc',
  ],
  grids: grids,
  //? not sure if I ever need assets... since webpack optimize them
  assets: assets,
  products: products,
  banners: banners,
  footer,
};
