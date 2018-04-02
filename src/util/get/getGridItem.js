import React from 'react';
import { ContentSynchronizer } from 'ez-site-content-store';

import GridItem from '../../components/GridItem/GridItem';

// , additionalContent = {}, additionaStyle = {}
export default function getGridItem(value, byType) {
  let gridItem = {};

  // TODO - may need to break into seperated functions in the future
  if (byType === 'by name') {
    gridItem = ContentSynchronizer.getItem('grids', 'gridItemName', value, true);
  } else {
    gridItem = ContentSynchronizer.getItem('grids', 'gridItemId', value, true);
  }

  // if (!Object.keys(additionalContent).length) {

  // }

  // if (Object.keys(additionaStyle).length) {

  // }

  return (
    <GridItem
      gridResponsiveProperties={gridItem.gridResponsiveProperties}
      gridContent={gridItem.gridContent}
      gridStyle={gridItem.gridStyle}
      gridCustomStyle={gridItem.gridCustomStyle}
      gridComponent={gridItem.gridComponent}
      key={gridItem.gridItemId.toString()}
    />
  );
}
