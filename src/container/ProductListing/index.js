import React, { Component } from 'react'; import PropTypes from 'prop-types';
import { ContentSynchronizer } from 'ez-site-content-store';
import GridItem from '../../components/GridItem/GridItem';
import consoleShow from './../../util/debug/consoleShow';
import PageShell from '../PageShell/PageShell';

const ProductListing = class ProductListing extends Component {
  render() {
    consoleShow('props', {
      componentName: 'Listing',
      props: this.props,
    });
    const routeParams = this.props.params;
    const {
      productRef,
      tagRef,
    } = routeParams;
    // const productRef = routeParams.productRef;
    // const queryParams = this.props.location.query;

    // find specific product grid item with productRef & queryParams
    // TODO: right now its NOT COMPLETE!!!!
    let gridItemName = '';
    let listingGridItem = null;

    // TODO in the future, taag path should be query param for multiple tags,
    // instead of a path ref!!! NOT SCALABLE!
    if (tagRef) {
      gridItemName = 'specific tag product listing';
      listingGridItem = ContentSynchronizer.getItem('grids', 'gridItemName', gridItemName, true);

      // WARNNING:
      // a anti-pattern way to injecting dynamic var into existing data....
      // had to be done for the filter type grid
      const collectionFilterName = listingGridItem.gridContent.data.name;
      const listingContentRaw = ContentSynchronizer.getCollection(collectionFilterName);
      listingGridItem.gridContent.data.filteredListing = listingContentRaw.filter((item) => {
        const { tags } = item;
        let matched = false;
        for (let i = 0; i < tags.length; i += 1) {
          if (tags[i] === tagRef) {
            matched = true;
            break;
          }
        }
        return matched;
      }) || [];
    } else if (productRef) {
      gridItemName = 'product listing';
      listingGridItem = ContentSynchronizer.getItem('grids', 'gridItemName', gridItemName, true);
    } else {
      gridItemName = 'product listing';
      listingGridItem = ContentSynchronizer.getItem('grids', 'gridItemName', gridItemName, true);
    }

    const bodyDisplay = (<GridItem
      gridResponsiveProperties={listingGridItem.gridResponsiveProperties}
      gridContent={listingGridItem.gridContent}
      gridStyle={listingGridItem.gridStyle}
      gridComponent={listingGridItem.gridComponent}
      key={listingGridItem.gridItemId.toString()}
    />);
    return (
      <PageShell
        hasSlides
        containerLevelClass="productListing__container row no-gutters"
        style={{}}
      >
        {bodyDisplay}
        {this.props.children}
      </PageShell>
    );
  }
};
ProductListing.propTypes = {
  // TODO: need in the future for query param
  // location: PropTypes.any,
  params: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.objectOf(PropTypes.any),
};
ProductListing.defaultProps = {
  children: null,
};
export default ProductListing;
