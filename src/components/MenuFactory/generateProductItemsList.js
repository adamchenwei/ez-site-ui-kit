module.exports = function generateProductItemsList(collection,
  collectionName,
  menuItemType,
  menuName,
  baseTag) {
  const list = [];
  switch (menuName) {
    case 'products-all-items':
      collection.forEach((collectionItem) => {
        // console.log(collectionItem);
        const productRouteName = collectionItem.route.name;
        const path = `${baseTag}/${collectionName}/detail/${productRouteName}`;
        const title = collectionItem.shortTitle;
        list.push({
          path,
          title,
        });
      });
      break;
    default:
      break;
  }
  return list;
};
