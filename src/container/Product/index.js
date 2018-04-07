import React from 'react';
import PropTypes from 'prop-types';
import { ContentSynchronizer } from 'ez-site-content-store';
import GridItem from '../../components/GridItem/GridItem';
import PageShell from '../PageShell/PageShell';

function Product(props) {
  const {
    productRef,
    children,
  } = props;
  const routeParams = props.params;
  const productRefRefreshed = routeParams ? routeParams.productRef : productRef;
  // const queryParams = props.location.query;

  // find specific product grid item with productRef & queryParams
  // TODO: right now its NOT COMPLETE!!!!

  const productSpecs = ContentSynchronizer.getProductGrid(productRefRefreshed);
  const PRODUCT_GRID_ITEM_ID = 3;
  const productGridItem = ContentSynchronizer.getItem('grids', 'gridItemId', PRODUCT_GRID_ITEM_ID, true);
  // TODO: Dynamic inject content... not very dry
  productGridItem.gridContent.productSpecs = productSpecs;

  const bodyDisplay = (<GridItem
    gridResponsiveProperties={productGridItem.gridResponsiveProperties}
    gridContent={productGridItem.gridContent}
    gridStyle={productGridItem.gridStyle}
    gridComponent={productGridItem.gridComponent}
    key={productGridItem.gridItemId.toString()}
  />);
  return (
    <PageShell
      containerLevelClass=""
      anchorToBelow="sub-menu-bar"
      style={{}}
    >
      {bodyDisplay}
      {children}
    </PageShell>
  );
}
Product.propTypes = {
  // location: PropTypes.any,
  params: PropTypes.objectOf(PropTypes.any),
  productRef: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any),
};
Product.defaultProps = {
  params: null,
  children: null,
};
export default Product;
