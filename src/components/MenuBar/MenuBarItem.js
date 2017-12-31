import React, { Component } from 'react'; import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ContentSynchronizer from '../ContentSynchronizer/ContentSynchronizer';

export default class MenuBarItem extends Component {

  render() {
    require('./MenuBarItem.scss');
    let content = this.props.menuItem;
    /*console.log('MenuBarItem');
    console.log(content);
    console.log(this.props);*/
    let menuItemType = this.props.menuItemType;
    let path = null;
    let title = null;

    const totalItemsCount = content.totalItemsCount || null;

    switch (menuItemType) {
      case 'filter':
        const collectionPath = content.collectionName
        ? `/${content.collectionName}`
        : '';
        path = `${collectionPath}/${content.type}/${content.name}`;
        title = content.link.name;
        const mobileFiltersState = ContentSynchronizer.getDynamicContentState('mobileFilterMenuItems');
        const mainState = ContentSynchronizer.getDynamicContentState('mobileMenuItems');
        break;
      case 'page':
        if (content.type) {
          path = `/${content.type}/${content.page.name}`;
        } else {
          path = `/${content.page.name}`;
        }
        title = content.page.title;
        break;
      case 'product':
        path = content.path;
        title = content.title;
        break;
      default:
        break;
    }
    let template = (
      <section className='menuBarItem__container'>
        <Link to={path}>{title}</Link>
      </section>
    );

    return template;
  }
}

MenuBarItem.propTypes = {
  menuItem: PropTypes.object,
  menuItemResponsive: PropTypes.object,
  menuItemStyle: PropTypes.array,
  menuItemType: PropTypes.string,
};
