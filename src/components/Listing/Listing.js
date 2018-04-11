import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import { ContentSynchronizer } from 'ez-site-content-store';
import GridItem from '../GridItem/GridItem';
import consoleShow from './../../util/debug/consoleShow';

export default class Listing extends Component {
  constructor(props) {
    super(props);
    consoleShow('props', {
      componentName: 'Listing',
      props: this.props,
    });
  }

  render() {
    const data = this.props.contentData;
    const customStyle = data.listingCustomStyle;

    if (data.type === 'filter') {
      // when its filter, we expect a dynamic injected array call filteredListing
      // which got created inside ProductListing component

      let listingContent = data.filteredListing;
      const mockedListingContent = [];
      listingContent.forEach((listing) => {
        mockedListingContent.push(listing);
      });

      // TODO - remove once go prod, this create dups hack!
      // listingContent.forEach((listing, index) => {
      //   mockedListingContent.push(listing);
      // });

      listingContent = mockedListingContent;
      const listingContentItemGridStyle = data.listingItemStyle;
      consoleShow('props', {
        componentName: 'listingContentItemGridStyle',
        props: listingContentItemGridStyle,
      });
      return (
        <Row>
          {listingContent.map((listing, index) => {
            consoleShow('props', {
              componentName: 'Listing Content Item',
              props: listing,
});
            const responsiveProperties = data.listingItemResponsiveProperties;
            const componentName = data.listingItemComponentName;
            const collectionName = data.name;
            // TODO anti pattern!!!! But need to be done
            const newListing = listing;
            newListing.collectionName = collectionName;
            return (
              <GridItem
                gridResponsiveProperties={responsiveProperties}
                gridContent={newListing}
                gridStyle={listingContentItemGridStyle}
                gridCustomStyle={customStyle}
                gridType={newListing.gridTypeName}
                gridComponent={componentName}
                key={index.toString()}
              />
            );
          })}
        </Row>
      );
    }
    let listingContent = ContentSynchronizer.getCollection(data.name);
    const mockedListingContent = [];
    listingContent.forEach((listing) => {
      mockedListingContent.push(listing);
    });

    // TODO - remove once go prod, this create dups hack!
    // listingContent.forEach((listing, index) => {
    //   mockedListingContent.push(listing);
    // });

    listingContent = mockedListingContent;
    const listingContentItemGridStyle = data.listingItemStyle;
    consoleShow('props', {
      componentName: 'listingContentItemGridStyle',
      props: listingContentItemGridStyle,
    });
    return (
      <Row>
        {listingContent.map((listing, index) => {
            consoleShow('props', {
              componentName: 'Listing Content Item',
              props: listing,
});
            const responsiveProperties = data.listingItemResponsiveProperties;
            const componentName = data.listingItemComponentName;
            const collectionName = data.name;
            // TODO anti pattern!!!! But need to be done
            const newListing = listing;
            newListing.collectionName = collectionName;

            return (
              <GridItem
                gridResponsiveProperties={responsiveProperties}
                gridContent={newListing}
                gridStyle={listingContentItemGridStyle}
                gridCustomStyle={customStyle}
                gridType={newListing.gridTypeName}
                gridComponent={componentName}
                key={index.toString()}
              />
            );
          })}
      </Row>
    );
  }
}

Listing.propTypes = {
  contentData: PropTypes.objectOf(PropTypes.any).isRequired,
};
