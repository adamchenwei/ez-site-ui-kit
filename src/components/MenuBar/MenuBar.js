import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ContentSynchronizer from '../ContentSynchronizer/ContentSynchronizer';
import GridItem from '../GridItem/GridItem';

import MenuBarItem from '../MenuBar/MenuBarItem';

//todo - THIS WHOLE MENU BAR IS USING OLDER SYSTEM, WE SHOULD REPLACE most of its logic WITH UTILIZING
// MeuItems and MenuFilterItems for better reusability

export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.displayMenuItem = this.displayMenuItem.bind(this);
  }

  constructCollectionMenuItemConfig(item, collectionName, menuItemType, menuName) {
    switch(menuItemType) {
      case 'filter': {
        return {
          type: menuName,
          name: item,
          collectionName,
          /*query: [
            {
              paramName: 'tag',
              paramValue: '',
            },
          ],*/
          link: {
            name: item,
          },
        }
        break;
      }
      default:
        break;
    }
  }

  displayCollection(collection, config, totalItemsCount) {
    const {
      collectionName,
      menuItemStyle,
      menuItemType,
      menuName,
      menuItemResponsiveProperties,
    } = config.menuConfig;

    switch (config.menuName) {
      case 'tags': {
        let tagsCollection = [];
        collection.forEach((collectionItem, index) => {
          tagsCollection = tagsCollection.concat(collectionItem.tags);
        });
        const uniqueTags = tagsCollection.filter((v,i,a) => a.indexOf(v)==i);
        const tagMenuItemsDisplay = uniqueTags.map(
          (tag, tagDisplayIndex) => {
            const content = this.constructCollectionMenuItemConfig(tag, collectionName, menuItemType, config.menuName);
            content.totalItemsCount = totalItemsCount;
            return <GridItem
            gridResponsiveProperties={menuItemResponsiveProperties}
            gridContent={content}
            gridStyle={menuItemStyle}
            gridType={menuItemType}
            gridComponent='MenuBarItem'
            key={tagDisplayIndex.toString()} /> || null;
          }
        );

        return tagMenuItemsDisplay || null;
      }

      default: {
        return null;
      }
    }
  }

  displayProducts(collection, config) {
    // productMenuItems
    // MenuBarItem
    console.log('displayProducts')
    console.log(config);
    console.log(collection);
    const baseTag = ContentSynchronizer.getCollection('site').domain.baseTag;
    const collectionName = config.menuConfig.collectionName;
    const menuItems = collection.map((item, index) => {
      console.log(item);
      const productRouteName = item.route.name;
      const title = item.shortTitle;
      const menuItem = {
        path: `${baseTag}/${collectionName}/specific/${productRouteName}`,
        title,
      }
      return <MenuBarItem
      key={index}
      menuItem={menuItem}
      menuItemType={'product'} />
    })
    return menuItems;
  }

  displayMenuItem(menuItem, displayIndex, totalItemsCount) {
    // console.log('menu bar -> items');
    // console.log(menuItem);
    const menuBarItem = menuItem.componentName;
    switch (menuItem.type) {
      case 'page': {
        let page = null;
        page = ContentSynchronizer.getItem('pages', 'id', menuItem.content.pageId, true);
        menuItem.content.page = page;
        menuItem.content.totalItemsCount = totalItemsCount;

        return page ? <GridItem
          gridResponsiveProperties={menuItem.responsiveProperties}
          gridContent={menuItem.content}
          gridStyle={menuItem.style}
          gridType={menuItem.type}
          gridComponent={menuBarItem}
          key={displayIndex.toString()} /> : null;
      }
      case 'filter': {
        return menuItem ? <GridItem
          gridResponsiveProperties={menuItem.responsiveProperties}
          gridContent={menuItem.content}
          gridStyle={menuItem.style}
          gridType={menuItem.type}
          gridComponent={menuBarItem}
          key={displayIndex.toString()} /> : null;
      }
      default:
        throw Error(`invalid menu type: ${menuItem.type}`);
        break;
    }
  }

  render() {
    require('./MenuBar.scss');
    let containerLevelStyle = 'menuBar__container';

    // const menuItemStyle = 'menuBar__item';
    const menuId = this.props.menuId;
    const menuType = this.props.menuType;
    if (menuId) {
      const config = ContentSynchronizer.getItem('menus', 'menuId', menuId, true);
      //allow addition / removal of container level styles according to additional data
      const position = config.menuConfig.position;
      let addedStyles = '';
      switch (position) {
        case 'center':
          addedStyles = 'menuBar__container--center';
          break;
        default:
          break;
      }

      //TODO - add col-xx value adjuster as part of menuConfig or auto adjust
      // menuConfig.widthForTitle = ...; 

      containerLevelStyle = `${addedStyles} ${containerLevelStyle}`;
      switch (menuType) {
        case 'custom': {
          //ContentSynchronizer.setDynamicContent(menuType, config.menuItems);
          const menuItemsDisplay = config.menuItems.map(
            (menuItem, index) => {
              return this.displayMenuItem(menuItem, index, config.menuItems.length);
            }
          );
          return (
            <section className={containerLevelStyle}>
              {menuItemsDisplay}
            </section>
          );
        }
        case 'collection': {
          const collection = ContentSynchronizer.getCollection(config.menuConfig.collectionName);
          return (
            <section className={containerLevelStyle}>
              {this.displayCollection(collection, config)}
            </section>
          );
        }
        case 'products': {
          const collection = ContentSynchronizer.getCollection(config.menuConfig.collectionName);
          console.log(collection);
          console.log(config);
          return (
            <section className={containerLevelStyle}>
              {this.displayProducts(collection, config)}
            </section>
          );
        }
        default: {
          return (
            <section className={containerLevelStyle}>
              menu bar not found
            </section>
          );
        }
      }
    } else {
      return (
        <section className={containerLevelStyle}>
          menu bar not found
        </section>
      );
    }
  }
}

MenuBar.propTypes = {
  menuId: PropTypes.number.isRequired,
  menuType: PropTypes.string.isRequired,
};
