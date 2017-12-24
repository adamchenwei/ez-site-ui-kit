import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import NotificationBar from '../../components/NotificationBar/NotificationBar';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Listing from '../../components/Listing/Listing';
import ListingItem from '../../components/ListingItem/ListingItem';

import MenuBarItem from '../../components/MenuBar/MenuBarItem';
import FooterBar from '../../components/FooterBar';
import LogoBar from '../../components/LogoBar/LogoBar';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

export default function getGridComponent(componentName, gridContent, gridType) {
  //console.log(gridContent);
  const {
    style,
    data,
    type,
  } = gridContent;

  switch (componentName) {
    case 'MenuBar':
      return <MenuBar
        menuId={gridContent.menuId}
        menuType={gridContent.menuType}/>;
    case 'MenuBarItem':
      return <MenuBarItem
        menuItem={gridContent}
        menuItemResponsive={gridContent.responsiveProperties}
        menuItemStyle={style}
        menuItemType={gridType} />;
    case 'NotificationBar':
      return <NotificationBar
        contentData={data}
        contentType={type}
        contentStyle={style} />;
    case 'HeaderBar':
      return <HeaderBar />;
    case 'ProductDisplay':
      return <ProductDisplay
        productName={gridContent.productName}
        content={gridContent.productSpecs}
        contentStyle={style} />;
    case 'FooterBar':
      return <FooterBar
        contentData={data}
        contentType={type}
        contentStyle={style} />;
    case 'Listing':
      return <Listing
        contentData={data}
        contentType={type}
        contentStyle={style} />;
    case 'ListingItem':
      return <ListingItem
        content={gridContent}
        type={type}
        style={style} />;
    case 'BreadCrumb':
      return <BreadCrumb
        content={data}
        type={type}
        style={style} />;
    case 'LogoBar':
      return <LogoBar
        content={gridContent}
        type={type}
        style={style} />;
    /*case 'TemplateComponent':
      return <TemplateComponent
        contentData={data}
        contentType={type}
        contentStyle={style} />;*/
    default:
      return <div> Woops! </div>;
  }
}
