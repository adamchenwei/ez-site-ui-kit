import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {ContentSynchronizer} from 'ez-site-content';
import GridItem from '../../components/GridItem/GridItem';
import getGridItem from './../../util/get/getGridItem';
import PageShell from '../PageShell/PageShell';

const Product = class Product extends Component {
  constructor(props) {
    super();
  }
  render() {
    const {
      productRef,
      children,
    } = this.props;
    const routeParams = this.props.params;
    const productRefRefreshed = routeParams ? routeParams.productRef : productRef;
    //const queryParams = this.props.location.query;

    //find specific product grid item with productRef & queryParams
    //TODO: right now its NOT COMPLETE!!!!
    console.log('PRODUCT REF IS ' + productRefRefreshed);
    console.log(this.props);
    const productSpecs = ContentSynchronizer.getProductGrid(productRefRefreshed);
    const PRODUCT_GRID_ITEM_ID = 3;
    const productGridItem = ContentSynchronizer.getItem(
      'grids', 'gridItemId', PRODUCT_GRID_ITEM_ID, true);
    //TODO: Dynamic inject content... not very dry
    productGridItem.gridContent.productSpecs = productSpecs;
    console.log('-----Product');
    console.log(productGridItem.gridContent.prodctSpecs);

    const bodyDisplay = <GridItem
      gridResponsiveProperties={productGridItem.gridResponsiveProperties}
      gridContent={productGridItem.gridContent}
      gridStyle={productGridItem.gridStyle}
      gridComponent={productGridItem.gridComponent}
      key={productGridItem.gridItemId.toString()} />;
    return (
      <PageShell
        containerLevelClass={''}
        anchorToBelow={'sub-menu-bar'}
        style={{}} >
        {bodyDisplay}
        {children}
      </PageShell>
    );
  }
};
Product.propTypes = {
  location: PropTypes.any,
  params: PropTypes.object,
}
export default Product;
