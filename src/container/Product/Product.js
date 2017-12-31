import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ContentSynchronizer from '../../components/ContentSynchronizer/ContentSynchronizer';
import GridItem from '../../components/GridItem/GridItem';
import getGridItem from './../../util/get/getGridItem';
import PageShell from '../PageShell/PageShell';

import { withRouter } from 'react-router';

const Product = class Product extends Component {
  static propTypes = {
    location: PropTypes.any,
    params: PropTypes.object,
  }

  render() {
    require('./Product.scss');
    const routeParams = this.props.params;
    const productRef = routeParams.productRef;
    const queryParams = this.props.location.query;

    //find specific product grid item with productRef & queryParams
    //TODO: right now its NOT COMPLETE!!!!
    const productSpecs = ContentSynchronizer.getProductGrid(productRef);
    const PRODUCT_GRID_ITEM_ID = 3;
    const productGridItem = ContentSynchronizer.getItem(
      'grids', 'gridItemId', PRODUCT_GRID_ITEM_ID, true);
    //TODO: Dynamic inject content... not very dry
    productGridItem.gridContent.productSpecs = productSpecs;

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
      </PageShell>
    );
  }
};

export default withRouter(Product);
