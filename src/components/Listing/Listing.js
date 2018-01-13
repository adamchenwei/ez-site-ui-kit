import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import {ContentSynchronizer} from 'ez-site-content';
import GridItem from '../GridItem/GridItem';
import consoleShow from './../../util/debug/consoleShow';
import {Container, Row, Col} from 'reactstrap';

export default class Listing extends Component {
  constructor(props) {
    super(props);
    consoleShow('props', {
      componentName: 'Listing',
      props: this.props});
  }

  render() {
    const contentStyle = concatCssClasses(this.props.contentStyle);
    //const noGutter = 'no-gutters';

    const containerLevelStyle = `listing__container row ${contentStyle}`;

    const type = this.props.contentType;
    const data = this.props.contentData;
    const customStyle = data.listingCustomStyle;
  
    if (data.type === 'filter') {
      //when its filter, we expect a dynamic injected array call filteredListing
      //which got created inside ProductListing component

      let listingContent = data.filteredListing;
      let mockedListingContent = [];
      listingContent.forEach((listing, index) => {
        mockedListingContent.push(listing);
      });

      //TODO - remove once go prod, this create dups hack!
      // listingContent.forEach((listing, index) => {
      //   mockedListingContent.push(listing);
      // });

      listingContent = mockedListingContent;
      const listingContentItemGridStyle = data.listingItemStyle;
      consoleShow('props', {
        componentName: 'listingContentItemGridStyle',
        props: listingContentItemGridStyle});
      return (
        <Row>
          {listingContent.map((listing, index) => {
            consoleShow('props', {
              componentName: 'Listing Content Item',
              props: listing});
            const responsiveProperties = data.listingItemResponsiveProperties;
            const componentName = data.listingItemComponentName;
            const collectionName = data.name;
            //TODO anti pattern!!!! But need to be done
            listing.collectionName = collectionName;
            return (
              <GridItem
                gridResponsiveProperties={responsiveProperties}
                gridContent={listing}
                gridStyle={listingContentItemGridStyle}
                gridCustomStyle={customStyle}
                gridType={listing.gridTypeName}
                gridComponent={componentName}
                key={index.toString()} />
            );
          })}
        </Row>
      );
      // return (
      //   <section className={containerLevelStyle}>
      //     {listingContent.map((listing, index) => {
      //       consoleShow('props', {
      //         componentName: 'Listing Content Item',
      //         props: listing});
      //       const responsiveProperties = data.listingItemResponsiveProperties;
      //       const componentName = data.listingItemComponentName;
      //       const collectionName = data.name;
      //       //TODO anti pattern!!!! But need to be done
      //       listing.collectionName = collectionName;
      //       return (
      //         <GridItem
      //           gridResponsiveProperties={responsiveProperties}
      //           gridContent={listing}
      //           gridStyle={listingContentItemGridStyle}
      //           gridCustomStyle={customStyle}
      //           gridType={listing.gridTypeName}
      //           gridComponent={componentName}
      //           key={index.toString()} />
      //       );
      //     })}
      //   </section>
      // );
    } else {
      let listingContent = ContentSynchronizer.getCollection(
        data.name);
      let mockedListingContent = [];
      listingContent.forEach((listing, index) => {
        mockedListingContent.push(listing);
      });

      //TODO - remove once go prod, this create dups hack!
      // listingContent.forEach((listing, index) => {
      //   mockedListingContent.push(listing);
      // });

      listingContent = mockedListingContent;
      const listingContentItemGridStyle = data.listingItemStyle;
      consoleShow('props', {
        componentName: 'listingContentItemGridStyle',
        props: listingContentItemGridStyle});
      return (
        <Row>
          {listingContent.map((listing, index) => {
            consoleShow('props', {
              componentName: 'Listing Content Item',
              props: listing});
            const responsiveProperties = data.listingItemResponsiveProperties;
            const componentName = data.listingItemComponentName;
            const collectionName = data.name;
            //TODO anti pattern!!!! But need to be done
            listing.collectionName = collectionName;

            return (
              <GridItem
                gridResponsiveProperties={responsiveProperties}
                gridContent={listing}
                gridStyle={listingContentItemGridStyle}
                gridCustomStyle={customStyle}
                gridType={listing.gridTypeName}
                gridComponent={componentName}
                key={index.toString()} />
            );
          })}
        </Row>
      );
        // return (
      //   <section className={containerLevelStyle}>
      //     {listingContent.map((listing, index) => {
      //       consoleShow('props', {
      //         componentName: 'Listing Content Item',
      //         props: listing});
      //       const responsiveProperties = data.listingItemResponsiveProperties;
      //       const componentName = data.listingItemComponentName;
      //       const collectionName = data.name;
      //       //TODO anti pattern!!!! But need to be done
      //       listing.collectionName = collectionName;

      //       return (
      //         <GridItem
      //           gridResponsiveProperties={responsiveProperties}
      //           gridContent={listing}
      //           gridStyle={listingContentItemGridStyle}
      //           gridCustomStyle={customStyle}
      //           gridType={listing.gridTypeName}
      //           gridComponent={componentName}
      //           key={index.toString()} />
      //       );
      //     })}
      //   </section>
      // );
    }
  }
}

Listing.propTypes = {
  contentData: PropTypes.object.isRequired,
  contentStyle: PropTypes.array,
  contentType: PropTypes.string,
};
