module.exports = {
  siteId: 1,
  siteName: {
    casual: 'Natural Orchards',
  },
  domain: {
    https: false,
    name: 'naturalorchards',
    space: 'us',
    development: {
      https: false,
      name: 'http://localhost:8080',
    },
    baseTag: '',
  },
  cache: {
    updated: {
      time: 1508673731080,
    },
    storedOnClient: {
      time: null,
    }
  },
  date: {//deprecated, use cache->updated->date instead
    updated: 1508673731080, //unix value
    storedOnClient: 0,
  },
  flag: {
    notificationBar: {
      contentUpdated: {
        date: null,
      },
      closed: {
        date: null,
        manually: false,
      }
    }
  }

};
