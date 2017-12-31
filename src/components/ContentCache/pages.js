export default [
  /*
    Features
    - referencing grid Id for content
    Each page not necessarily a component, but a collection of various grid items!
    BUT its also allowed if its more of a specific component thing that generate grids in its own way.
  */
  {
    id: 1,
    path: '/',
    componentName: 'LandingPage',
    name: 'home',
    title: 'Home',
    //may have alternateTitle later, for menu reference purpose
    include: {
      grids: [
        1,
        6,
        2,
      ],
    },
  },
  {
    id: 2,
    path: '/about',
    componentName: 'About',
    name: 'about',
    title: 'About',
    include: {
      grids: [
        1,
        6,
        2,
      ],
    },
  },
  {
    id: 3,
    path: '/contact',
    componentName: 'Contact',
    name: 'contact',
    title: 'Contact',
    include: {
      grids: [
        1,
        6,
        2,
      ],
    },
  },
  /*{
    id: 3,
    path: '/product/1',
    componentName: null,
    name: 'product',
    title: 'Product',
    include: {
      grids: [
        1,
        2,
        3,
      ],
    },
  },*/
];
