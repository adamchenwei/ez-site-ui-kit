export default [
  //A grid is a component neutral container that can be loaded and become any kind of components!
  //gridComponent is the recognizer to make that happen!
  {
    gridItemId: 1,
    gridItemName: 'notifcation bar', //name use by the application for search queries
    gridTypeName: 'custom', //not sure when I will need it, but it definately need to be here, as type is critical for query
    gridCustomName: 'notification bar', //custom name for user, not used by app
    gridComponent: 'NotificationBar', //this grid's core component it is loading
    gridContent: {
      //all the data that is passing into the component, VERY FLEXIBLE
      //HOWEVER it MUST FOLLOW THE FOLLOWING ROOT LAYER DATA PATTERN
      /*
        {
          type: 'type name',
          data: {
            ....
          },
          style: {
            ....
          }
        }
      */
      type: 'textWithBarLink',
      data: {
        text: 'we are in opening sale!',
        link: 'http://naturalorchards.us',
        showAsDefault: true,
      },
      style: [//MANDATORY: needed for inside component style
        'center-text',
      ],
    },
    gridCustomStyle: {},
    gridStyle: [], //Styles apply to the grid itself
    gridResponsiveProperties: {//How grid itself will response to different screen sizes
      standard: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },
  {
    gridItemId: 2,
    gridItemName: 'main menu bar',
    gridTypeName: 'menu',
    gridCustomName: 'menu bar',
    gridComponent: 'MenuBar',
    gridContent: {
      menuId: 1,
      menuType: 'custom',
    },
    gridCustomStyle: {
      container: {
        inlineStyles: {
          marginTop: '20px',
          marginBottom: '20px',
        }
      }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },
  {
    gridItemId: 3,
    gridItemName: 'specific product',
    gridTypeName: 'specific product',
    gridCustomName: 'specific product',
    gridComponent: 'ProductDisplay',
    gridContent: {
      productName: 'product',
      style: [],
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: 3,
        xl: 3,
      },
    },
  },
  {
    gridItemId: 4,
    gridItemName: 'main footer',
    gridTypeName: 'menu',
    gridCustomName: 'footer bar',
    gridComponent: 'FooterBar',
    gridContent: {
      data: {},
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },

  {
    gridItemId: 5,
    gridItemName: 'product listing',
    gridTypeName: 'listing',
    gridCustomName: 'product listing',
    gridComponent: 'Listing',
    gridContent: {
      data: {
        name: 'products',
        listingItemComponentName: 'ListingItem',
        listingItemResponsiveProperties: {
          standard: 12,
          sm: 12,
          md: 4,
          lg: 4,
          xl: 4,
          offset: {
            standard: '',
            sm: '',
            md: '',
            lg: '',
            xl: '',
          },
        },
        listingCustomStyle: {
          container: {
            inlineStyles: {
              marginTop: '1%',
              marginBottom: '1%',
            }
          }
        },
        listingItemStyle: [
          'listingItem__shell',
        ],
      },
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 10,
      sm: 10,
      md: 10,
      lg: 10,
      xl: 10,
      offset: {
        standard: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
      },
    },
  },

  {
    gridItemId: 6,
    gridItemName: 'tags menu bar',
    gridTypeName: 'menu',
    gridCustomName: 'tags menu bar',
    gridComponent: 'MenuBar',
    gridContent: {
      menuId: 2,
      menuType: 'collection',
    },
    gridCustomStyle: {
      container: {
        inlineStyles: {
          marginTop: '20px',
          marginBottom: '20px',
        }
      }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },

  {
    gridItemId: 7,
    gridItemName: 'specific tag product listing',
    gridTypeName: 'listing',
    gridCustomName: 'specific tag product listing',
    gridComponent: 'Listing',
    gridContent: {
      data: {
        name: 'products',
        type: 'filter',
        //filterData: this need to be ALWAYS DYNAMICALLY INSERTED TO BE EFFECTIVE!
        listingItemComponentName: 'ListingItem',
        listingItemResponsiveProperties: {
          standard: 12,
          sm: 12,
          md: 4,
          lg: 4,
          xl: 4,
          offset: {
            standard: '',
            sm: '',
            md: '',
            lg: '',
            xl: '',
          },
        },
        listingItemStyle: [
          'listingItem__shell',
        ],
      },
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 10,
      sm: 10,
      md: 10,
      lg: 10,
      xl: 10,
      offset: {
        standard: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
      },
    },
  },

  {
    gridItemId: 8,
    gridItemName: 'bread crumb',
    gridTypeName: 'custom',
    gridCustomName: 'bread crumb',
    gridComponent: 'BreadCrumb',
    gridContent: {
      data: {
        //dynamically generated
      },
      style: {
        container: {
          inlineStyles: {
            marginTop: '20px',
          }

        }
      }
    },
    gridCustomStyle: {
      // container: {
      //   inlineStyles: {

      //   }
      // }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },

  {
    gridItemId: 9,
    gridItemName: 'logo bar',
    gridTypeName: 'custom',
    gridCustomName: 'logo bar',
    gridComponent: 'LogoBar',
    gridContent: {
      data: {
        logo: {
          image: {
            url: './assets/images/logo.svg',
          }
        }
      },
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },

  {
    gridItemId: 10,
    gridItemName: 'all products direct link menu bar',
    gridTypeName: 'menu',
    gridCustomName: 'all products direct link menu bar',
    gridComponent: 'MenuBar',
    gridContent: {
      menuId: 4,
      menuType: 'collection',
    },
    gridCustomStyle: {
      container: {
        inlineStyles: {
          marginTop: '20px',
          marginBottom: '20px',
        }
      }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  },
];
