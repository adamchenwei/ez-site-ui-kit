
function constructCollectionMenuItemConfig(item, collectionName, menuItemType, menuName) {
  switch (menuItemType) {
    case 'filter': {
      return {
        type: menuName,
        name: item,
        collectionName,
        /* query: [
          {
            paramName: 'tag',
            paramValue: '',
          },
        ], */
        link: {
          name: item,
        },
      };
    }
    default:
      return null;
  }
}

module.exports = function generateFilterItemsList(collection,
  collectionName,
  menuItemType,
  menuName,
  baseTag) {
  const list = [];
  switch (menuName) {
    case 'tags': {
      let tagsCollection = [];
      collection.forEach((collectionItem) => {
        tagsCollection = tagsCollection.concat(collectionItem.tags);
      });
      const uniqueTags = tagsCollection.filter((v, i, a) => a.indexOf(v) === i);
      uniqueTags.map((tag) => {
        const content = constructCollectionMenuItemConfig(tag,
          collectionName, menuItemType, menuName);
        const collectionPath = content.collectionName
          ? `/${content.collectionName}`
          : '';
        const path = `${baseTag}${collectionPath}/${content.type}/${content.name}`;
        const title = content.link.name;

        list.push({
          path,
          title,
        });
        return false;
      });
    }
      break;
    default:
      break;
  }
  return list;
};

