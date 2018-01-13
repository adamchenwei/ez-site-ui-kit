import {ContentSynchronizer} from 'ez-site-content';

module.exports = function generateMenuItemsList (menu, baseTag) {
  let list = [];

  const {
    menuType,
    menuItems,
  } = menu;

  switch (menuType) {
    case 'custom': {
      menuItems.map(
        (menuItem, index) => {
          list.push(constructMenuItem(menuItem, baseTag));
        }
      );
      break;
    }
    default: {
      throw Error('menu type not found!');
    }
  }
  return list;
}

function constructMenuItem(menuItem, baseTag) {
  const menuBarItem = menuItem.componentName;
  switch (menuItem.type) {
    case 'page': {
      let page = null;
      page = ContentSynchronizer.getItem('pages', 'id', menuItem.content.pageId, true);

      const {
        path,
        title,
      } = page;
      return {
        path: `${baseTag ? '#' : ''}${path}`,
        title,
      };
    }
    case 'filter': {
      const collectionPath = menuItem.content.collectionName
      ? `/${content.collectionName}`
      : '';
      const path = `${collectionPath}/${menuItem.content.type}/${menuItem.content.name}`;
      const title = menuItem.content.link.name;
      return {
        path: `${baseTag ? '#' : ''}${path}`,
        title,
      };
    }
    default:
      throw Error(`invalid menu type: ${menuItem.type}`);
      break;
  }
  return null;
}
