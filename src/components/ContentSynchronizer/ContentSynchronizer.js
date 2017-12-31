import ContentCache from '../../components/ContentCache/index';
import get from 'lodash/get';
import set from 'lodash/set';

class ContentSynchronizer {
  constructor(content) {
    this.cacheLocalStorageName = this.getStorageName();
    this.content = ContentCache;
    this.dynamicContent = {};
    console.log(JSON.stringify(ContentCache));
    //TODO - enable when go prod
    //TODO - not yet, has cache problem when there is old cache
    //        MUST need old cache clean up logic!!!! BEFORE app is even started!!!!!
    // this.content =
    //   localStorage.getItem(this.cacheLocalStorageName)
    //   ? this.getCache()
    //   : ContentCache || content || {};

    //console.log(this.getProperty(this.content, 'site.cache.updated.time'));
    //check if client cache is stail or not and update cache accordingly
    const today = new Date();
    const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
    const storedOnClientTime = this.getProperty(this.content, 'site.cache.storedOnClient.time', 0);
    const yesterdayTime = yesterday.getTime();
    if ( storedOnClientTime < yesterdayTime) {
      this.setProperty(this.content, 'site.cache.storedOnClient.time', Date.now());
      //also make async call to update this.content!
    }

    //try get from localstorage if its fresh, meaning within 1 day
    //if  localstorage not available, get data from memory / http call
    //if  localstorage data empty or http call failed,
    //fall back to stale content local storage cache,
    //if there is one, if not, then redirect to a 404 page
    this.cacheIt();
  }

  setProperty(collection, propertyChain, value) {
    set(collection, propertyChain, value);
    this.content = collection;
  }

  getProperty(collection, propertyChain, defaultValue) {
    let collectionObject = collection;
    if (typeof collection === 'string') {
      collectionObject = this.content[collection] || {};
    }
    return get(collectionObject, propertyChain, defaultValue);
  }

  getDynamicContent(itemName) {
    if (!itemName || !this.dynamicContent[itemName]) return this.dynamicContent;
    return this.dynamicContent[itemName].content;
  }

  getDynamicContentState(itemName) {
    if (!itemName) {return}
    if (!this.dynamicContent[itemName] || !this.dynamicContent[name].status) {
      this.dynamicContent[name] = {content: [], status: 'initial'}
    }
    return this.dynamicContent[name].status;
  }

  getStorageName() {
    const domain = window.location.hostname;
    //'ezLandingSite' + domain.name
    return `ezLandingSite${domain}`;
  }

  cacheIt() {
    localStorage.setItem(this.cacheLocalStorageName, JSON.stringify(this.content));
    localStorage.setItem(`${this.cacheLocalStorageName}-Dynamic`, JSON.stringify(this.dynamicContent));
  }

  getCache() {
    //console.log('using cache'); //eslint-disable-line
    return JSON.parse(localStorage.getItem(this.cacheLocalStorageName));
  }

  getContent() {
    return this.content;
  }

  isFresh(date) {
    if (date === this.content.lastUpdatedDate) {
      return true;
    }
  }

  getCollection(collectionName) {
    return this.content[collectionName];
  }

  getItem(collectionName, keyName, keyValue, isArray) {
    const content = this.content;
    let result = null;
    //let found = false;
    if (isArray) {
      const contentArray = Object.keys(content);
      const contentLength = contentArray.length - 1;
      for (let i = 0; i <= contentLength; i++) {
        const collectionKeyName = contentArray[i];
        if (collectionKeyName === collectionName) {
          let collection = content[collectionKeyName];
          const collectionLength = collection.length - 1;
          for (let ci = 0; ci <= collectionLength; ci++) {
            if (!collection[ci][keyName] && ci === collectionLength) {
              result = this.error(collectionName, keyName, keyValue, isArray, 'all collection child searched');
              break;
            } else if (collection[ci][keyName] === keyValue) {
              //console.log('child found');
              result = collection[ci];
              break;
            }
          }
          break;
        } else if (i === contentLength) {
          result = this.error(collectionName, keyName, keyValue, isArray, 'all nodes searched');
          break;
        }
      }
      return result;
    } else {
      return this.error(collectionName, keyName, keyValue, isArray);
    }
  }

  getProductGrid(productName) {
    const products = this.content.products;
    let isMatched = false;
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === productName) {
        isMatched = true;
        return products[i];
      }
    }
    return null;
  }

  updateNotificationBarStatus(newStatus) {
    this.content.site.flag.notificationBar = newStatus;
    this.cacheIt();
  }
  error(collectionName, keyName, keyValue, isArray, addedComment) {
    return new Error(`content not found: logged
      *${addedComment}
      collection: ${collectionName}
      key: ${keyName}= ${keyValue}
      is array: ${isArray}
    `);
  }
}

export default new ContentSynchronizer();
