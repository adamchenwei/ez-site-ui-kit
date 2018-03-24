import { ContentSynchronizer } from 'ez-site-content-store';
import generateFilterItemsList from './../../MenuFactory/generateFilterItemsList';
import generateMenuItemsList from './../../MenuFactory/generateMenuItemsList';
import generateProductItemsList from './../../MenuFactory/generateProductItemsList';
import content from 'ez-site-content-store';

module.exports = {
  buildMenuItems,
  buildMenuFilterItems,
  buildProductMenuItems,
};

// gridId 2
function buildMenuItems(gridItemId) {
  if (!gridItemId) return [];
  // console.log(content);
  const menuBar = ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  const menuBarConfig = ContentSynchronizer.getItem('menus', 'menuId', menuBar.gridContent.menuId, true);
  const baseTag = ContentSynchronizer.getCollection('site').domain.baseTag;

  return generateMenuItemsList(menuBarConfig, baseTag);
}

// gridId 6
function buildMenuFilterItems(gridItemId) {
  if (!gridItemId) return [];

  const filterBar = ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  const filterBarConfig = ContentSynchronizer.getItem('menus', 'menuId', filterBar.gridContent.menuId, true);
  const {
    collectionName,
    menuItemType,
  } = filterBarConfig.menuConfig;
  const menuName = filterBarConfig.menuName;
  const collection = ContentSynchronizer.getCollection(collectionName);
  const baseTag = ContentSynchronizer.getCollection('site').domain.baseTag;
  return generateFilterItemsList(collection, collectionName, menuItemType, menuName, baseTag);
}


// gridId 10
function buildProductMenuItems(gridItemId) {
  // IDENTICAL WITH buildMenuFilterItems!!!!!!!!!!!!!!!!!!!!! refactor now
  if (!gridItemId) return [];

  const productsBar = ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  // console.log(productsBar);
  const productsBarConfig = ContentSynchronizer.getItem('menus', 'menuId', productsBar.gridContent.menuId, true);
  // console.log(productsBarConfig);
  const {
    collectionName,
    menuItemType,
  } = productsBarConfig.menuConfig;
  const menuName = productsBarConfig.menuName;
  const collection = ContentSynchronizer.getCollection(collectionName);
  const baseTag = ContentSynchronizer.getCollection('site').domain.baseTag;

  return generateProductItemsList(collection, collectionName, menuItemType, menuName, baseTag);
}
