import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ContentSynchronizer from '../../components/ContentSynchronizer/ContentSynchronizer';
import GridItem from '../../components/GridItem/GridItem';
import consoleShow from './../../util/debug/consoleShow';
import getGridItem from './../../util/get/getGridItem';
import PageShell from '../PageShell/PageShell';

const ProductListing = class ProductListing extends Component {

  showNotificationBar() {
    const NOTIFICATION_BAR_GRID_ITEM_ID = 1;
    return getGridItem(NOTIFICATION_BAR_GRID_ITEM_ID);
  }

  showMenuBar() {
    const MENU_BAR_GRID_ITEM_ID = 2;
    return getGridItem(MENU_BAR_GRID_ITEM_ID);
  }

  showLogoBar() {
    const LOGO_BAR_ID = 9;
    return getGridItem(LOGO_BAR_ID);
  }

  showSubMenuBar() {
    const SUB_MENU_BAR_GRID_ITEM_ID = 6;
    return getGridItem(SUB_MENU_BAR_GRID_ITEM_ID);
  }

  showFooterBar() {
    const FOOTER_BAR_GRID_ITEM_NAME = 'main footer';
    return getGridItem(FOOTER_BAR_GRID_ITEM_NAME, 'by name');
  }

  render() {
    consoleShow('props', {
      componentName: 'Listing',
      props: this.props});
    const routeParams = this.props.params;
    const {
      productRef,
      tagRef,
    } = routeParams;
    //const productRef = routeParams.productRef;
    //const queryParams = this.props.location.query;
    /*console.log('---product listing ---');
    console.log(routeParams);
    console.log(queryParams);*/

    //find specific product grid item with productRef & queryParams
    //TODO: right now its NOT COMPLETE!!!!
    let gridItemName = '';
    let listingGridItem = null;

    //TODO in the future, taag path should be query param for multiple tags, instead of a path ref!!! NOT SCALABLE!
    if (tagRef) {
      gridItemName = 'specific tag product listing';
      listingGridItem = ContentSynchronizer.getItem(
        'grids', 'gridItemName', gridItemName, true);

      //WARNNING:
      //a anti-pattern way to injecting dynamic var into existing data....
      //had to be done for the filter type grid
      const collectionFilterName = listingGridItem.gridContent.data.name;
      let listingContentRaw = ContentSynchronizer.getCollection(collectionFilterName);
      listingGridItem.gridContent.data.filteredListing = listingContentRaw.filter((item, index) => {
        const tags = item.tags;
        let matched = false;
        for (let i = 0; i < tags.length; i++) {
          if (tags[i]  === tagRef) {
            matched = true;
            break;
          }
        }
        return matched;
      }) || [];

    } else if (productRef) {
      gridItemName = 'product listing';
      listingGridItem = ContentSynchronizer.getItem(
        'grids', 'gridItemName', gridItemName, true);
    } else {
      gridItemName = 'product listing';
      listingGridItem = ContentSynchronizer.getItem(
        'grids', 'gridItemName', gridItemName, true);
    }

    const bodyDisplay = <GridItem
      gridResponsiveProperties={listingGridItem.gridResponsiveProperties}
      gridContent={listingGridItem.gridContent}
      gridStyle={listingGridItem.gridStyle}
      gridComponent={listingGridItem.gridComponent}
      key={listingGridItem.gridItemId.toString()} />;
    return (
      <PageShell
      hasSlides={true}
      containerLevelClass={'productListing__container row no-gutters'}
      style={{}} >
        {bodyDisplay}
      </PageShell>
    );
  }
};
ProductListing.propTypes = {
  location: PropTypes.any,
  params: PropTypes.object,
}
export default ProductListing;
