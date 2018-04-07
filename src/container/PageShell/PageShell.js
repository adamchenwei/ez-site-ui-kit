import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContentSynchronizer } from 'ez-site-content-store';
import getGridItem from './../../util/get/getGridItem';
import MobileMenuRouteEnabled from './../../components/MobileMenuRouteEnabled';
import FooterBar from './../../components/FooterBar';

import MenuBarNewRouteEnabled from './../../components/MenuBarNewRouteEnabled';
import {
  buildProductMenuItems,
  buildMenuItems,
} from './../../components/MobileMenu/factory/menu';

import SlideShow from './../../components/SlideShow';
import childrenPropTypes from '../../proptypes/childrenPropTypes';

function showLogoBar() {
  const LOGO_BAR_ID = 9;
  return getGridItem(LOGO_BAR_ID);
}


function showFooterBar() {
  const footerSocialIcons = ContentSynchronizer.getProperty('footer', 'socialIcons', []);
  return (<FooterBar
    socialIcons={footerSocialIcons}
  />);
}

function showSlides() {
  const slides = ContentSynchronizer.getCollection('banners');
  return <SlideShow slides={slides} />;
}

function showNotificationBar() {
  const NOTIFICATION_BAR_GRID_ITEM_ID = 1;
  return getGridItem(NOTIFICATION_BAR_GRID_ITEM_ID);
}

function showMenuBar() {
  const items = buildMenuItems(2);
  return (<MenuBarNewRouteEnabled
    customStyles={{
      marginTop: '16px',
      marginBottom: '16px',
    }}
    menuItems={items}
  />);
}
export default class PageShell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: {
        tags: [],
        main: [],
        sub: [],
      },
    };
  }


  showSubMenuBar() {
    // start move away from grid reference matrix!
    // reason: way too deep reference complicate work
    // const SUB_MENU_BAR_GRID_ITEM_ID = 6;
    // return getGridItem(SUB_MENU_BAR_GRID_ITEM_ID);
    const items = buildProductMenuItems(10).sort((a, b) => {
      const textA = a.title.toUpperCase();
      const textB = b.title.toUpperCase();
      if (textA < textB) {
        return -1;
      } else if (textA > textB) {
        return 1;
      }
      return 0;
    });
    // console.log(items)
    return (<MenuBarNewRouteEnabled
      customStyles={{
        marginTop: '24px',
        marginBottom: '24px',
      }}
      menuItems={items}
      scrollToHere={this.props.anchorToBelow === 'sub-menu-bar'}
    />);
  }

  showMobileMenu() {
    const site = ContentSynchronizer.getCollection('site');
    const siteName = site.siteName.casual;
    const { baseTag } = site;
    return (<MobileMenuRouteEnabled
      siteName={siteName}
      baseTag={baseTag}
      filterItems={this.state.menuItems.tags}
      menuItems={this.state.menuItems.main}
      subMenuItems={this.state.menuItems.sub}
    />);
  }

  render() {
    const {
      children,
      hasSlides,
    } = this.props;
    let {
      style,
      containerLevelStyle,
    } = this.props;
    if (!style) {
      style = {
        container: {
          classes: [],
        },
      };
    }

    // NOTE: So far diff between PageShell and ComponentWrapper
    // is the row class name!!!(at that time, since then there were lots done)
    containerLevelStyle = containerLevelStyle || 'page__container row no-gutters';
    return (
      <section className={containerLevelStyle} style={style}>
        {/* <Head>
          <title>Products</title>
        </Head> */}
        {showNotificationBar()}
        {this.showMobileMenu()}
        {showMenuBar()}
        {showLogoBar()}
        {this.showSubMenuBar()}
        {hasSlides ? showSlides() : null}
        {children}

        {showFooterBar()}
      </section>
    );
  }
}
PageShell.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  hasSlides: PropTypes.bool,
  anchorToBelow: PropTypes.string,
  children: childrenPropTypes.isRequired,
  containerLevelStyle: PropTypes.string,
};

PageShell.defaultProps = {
  style: {},
  hasSlides: false,
  anchorToBelow: '',
  containerLevelStyle: '',
};
