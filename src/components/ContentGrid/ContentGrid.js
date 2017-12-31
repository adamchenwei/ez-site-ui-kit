import React, { Component } from 'react';
import GridItem from '../GridItem/GridItem';
import concatCssClasses from './../../util/concat/concatCssClasses';

export default class ContentGrid extends Component {
  render() {
    require('./ContentGrid.scss');
    const gridItems = this.props.gridItems;
    const componentStyles = 'container-fluid contentGrid__container';
    const gridContainerProperties = concatCssClasses(this.props.gridContainerProperties);
    const concactStyles = `${gridContainerProperties} ${componentStyles}`;
    return (
      <section className={concactStyles}>
        <section className='row'>
          {gridItems.map((gridItem) => {
            const gridResponsiveProperties = gridItem.gridResponsiveProperties;
            return (
              <GridItem
                gridResponsiveProperties={gridResponsiveProperties}
                gridContent={gridItem.gridContent}
                gridStyle={gridItem.gridStyle}
                gridType={gridItem.gridTypeName}
                gridComponent={gridItem.gridComponent}
                gridCustomStyle={gridItem.gridCustomStyle}
                key={gridItem.gridItemId.toString()} />
            );
          })}
        </section>
      </section>
    );
  }
}

ContentGrid.propTypes = {
  gridContainerProperties: React.PropTypes.array.isRequired,
  gridItems: React.PropTypes.array.isRequired,
};
