export default [
  {
    id: 1,
    name: 'All 50 center items',
    title: 'Electronics for sale 50 cent each ONLY!',
    route: {
      name: 'almond',
    },
    description: `
      all 50 cent items!
      * picture updates daily!
    `,
    properties: {
    },
    price: {
      regular: 1,
      sale: 0.5,
    },
    availableQuantity: 1, //99999 means unlimited
    slideShow: [
      {
        name: 'front',
        images: [
          {
            url: '/assets/images/almonds.jpg',
          },
        ],
      },
    ],
  },

];
