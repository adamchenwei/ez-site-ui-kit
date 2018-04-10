import { ContentSynchronizer } from 'ez-site-content-store';

function constructMenuItem(menuItem, baseTag) {
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
        ? `/${menuItem.content.collectionName}`
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
  }
}

module.exports = function generateMenuItemsList(menu, baseTag) {
  const list = [];

  const {
    menuType,
    menuItems,
  } = menu;

  switch (menuType) {
    case 'custom': {
      menuItems.map((menuItem) => {
        list.push(constructMenuItem(menuItem, baseTag));
        return true;
      });
      break;
    }
    default: {
      throw Error('menu type not found!');
    }
  }
  return list;
};
