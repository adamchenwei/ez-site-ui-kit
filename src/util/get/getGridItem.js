import React, { Component, PropTypes } from 'react';
import GridItem from '../../components/GridItem/GridItem';
import ContentSynchronizer from '../../components/ContentSynchronizer/ContentSynchronizer';

export default function getGridItem(
  value,
  byType,
  additionalContent = {},
  additionaStyle = {},
) {
  let gridItem = {};

  //TODO - may need to break into seperated functions in the future
  if (byType === 'by name') {
    gridItem = ContentSynchronizer.getItem(
    'grids', 'gridItemName', value, true);
  } else {
    gridItem = ContentSynchronizer.getItem(
    'grids', 'gridItemId', value, true);
  }

  if (!Object.keys(additionalContent).length) {
    
  }

  if (Object.keys(additionaStyle).length) {
    
  }
  
  return (
    <GridItem
      gridResponsiveProperties={gridItem.gridResponsiveProperties}
      gridContent={gridItem.gridContent}
      gridStyle={gridItem.gridStyle}
      gridCustomStyle={gridItem.gridCustomStyle}
      gridComponent={gridItem.gridComponent}
      key={gridItem.gridItemId.toString()} />
  );
}