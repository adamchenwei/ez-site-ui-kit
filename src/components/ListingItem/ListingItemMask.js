import React, { Component } from 'react'; import PropTypes from 'prop-types';
import consoleShow from './../../util/debug/consoleShow';
import Container from './style/ListingItemMask/Container';
import Shade from './style/ListingItemMask/Shade';
import ClickableLink from './style/ListingItemMask/ClickableLink';
import Summary from './style/ListingItemMask/Summary';

export default class ListingItemMask extends Component {
  constructor(props) {
    super(props);
    consoleShow('props', {
      componentName: 'ListingItemMask',
      props: this.props,
    });
  }

  render() {
    const {
      price,
      title,
      show,
      collectionName,
      path,
    } = this.props;

    return (
      <Container hide={!show}>
        {/* Shade should always BEFORE content to avoid bleeding opacity!!! */}
        <Shade />
        <ClickableLink href={`/${collectionName}/detail/${path}`} />
        <Summary>
          <span>
            {title}
          </span> {
            price ? <span>${price}</span> : null
          }
        </Summary>
      </Container>
    );
  }
}

ListingItemMask.propTypes = {
  collectionName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
