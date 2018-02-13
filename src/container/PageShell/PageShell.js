import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ContentSynchronizer} from 'ez-site-content-store';
import GridItem from '../../components/GridItem/GridItem';
import getGridItem from './../../util/get/getGridItem';
import capToCamelCase from './../../util/transform/capToCamelCase';
import MobileMenuRouteEnabled from './../../components/MobileMenuRouteEnabled';
import FooterBar from './../../components/FooterBar';

import MenuBarNewRouteEnabled from './../../components/MenuBarNewRouteEnabled';
import {
  buildProductMenuItems,
  buildMenuItems,
} from './../../components/MobileMenu/factory/menu';

import SlideShow from './../../components/SlideShow';
//import { Head } from 'react-static'

export default class PageShell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        tags: [],
        main: [],
        sub: [],
      },
    }
  }

  showNotificationBar() {
    const NOTIFICATION_BAR_GRID_ITEM_ID = 1;
    return getGridItem(NOTIFICATION_BAR_GRID_ITEM_ID);
  }

  showMenuBar() {
    // const MENU_BAR_GRID_ITEM_ID = 2;
    // return getGridItem(MENU_BAR_GRID_ITEM_ID);
    const items = buildMenuItems(2);
    return <MenuBarNewRouteEnabled
      customStyles={{
        marginTop: '16px',
        marginBottom: '16px',
      }}
      menuItems={items}
    />
  }

  showSubMenuBar() {
    //start move away from grid reference matrix!
    //reason: way too deep reference complicate work
    // const SUB_MENU_BAR_GRID_ITEM_ID = 6;
    // return getGridItem(SUB_MENU_BAR_GRID_ITEM_ID);
    let items = buildProductMenuItems(10).sort((a, b) => {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    //console.log(items)
    return <MenuBarNewRouteEnabled
      customStyles={{
        marginTop: '24px',
        marginBottom: '24px',
      }}
      menuItems={items}
      scrollToHere={this.props.anchorToBelow === 'sub-menu-bar'}
    />
  }

  showMobileMenu() {
    const site = ContentSynchronizer.getCollection('site');
    const siteName = site.siteName.casual;
    const baseTag = site.baseTag;
    return (<MobileMenuRouteEnabled
      siteName={siteName}
      baseTag={baseTag}
      filterItems={this.state.menuItems.tags}
      menuItems={this.state.menuItems.main}
      subMenuItems={this.state.menuItems.sub}
    />);

  }

  showLogoBar() {
    const LOGO_BAR_ID = 9;
    return getGridItem(LOGO_BAR_ID);
  }



  showFooterBar() {
    const footerSocialIcons = ContentSynchronizer.getProperty('footer', 'socialIcons', []);
    return <FooterBar
      socialIcons={footerSocialIcons}
    />;
  }

  showSlides() {
    const slides = ContentSynchronizer.getCollection('banners');
    return <SlideShow slides={slides}/>;
  }

  render() {

    let {
      style,
      containerLevelStyle,
      children,
      hasSlides,
    } = this.props;

    if (!style) {
      style = {
        container: {
          classes: [],
        }
      }
    }

    //NOTE: So far diff between PageShell and ComponentWrapper is the row class name!!!(at that time, since then there were lots done)
    containerLevelStyle = containerLevelStyle || 'page__container row no-gutters';
    return (
      <section className={containerLevelStyle} style={style}>
        {/* <Head>
          <title>Products</title>
        </Head> */}
        {this.showNotificationBar()}
        {this.showMobileMenu()}
        {this.showMenuBar()}
        {this.showLogoBar()}
        {this.showSubMenuBar()}
        {hasSlides ? this.showSlides() : null}
        {children}

        {this.showFooterBar()}
      </section>
    );
  }
}
PageShell.propTypes = {
  style: PropTypes.object,
  containerLevelClass: PropTypes.string,
  hasSlides: PropTypes.bool,
  anchorToBelow: PropTypes.string,
}