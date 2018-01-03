import React, { Component } from 'react'; import PropTypes from 'prop-types';
import consoleShow from './../../util/debug/consoleShow';
import concatCssClasses from './../../util/concat/concatCssClasses';
import { Link } from 'react-router';
import Container from './style/ListingItemMask/Container';
import Shade from './style/ListingItemMask/Shade';
import ClickableLink from './style/ListingItemMask/ClickableLink';
import Summary from './style/ListingItemMask/Summary';

export default class ListingItemMask extends Component {
  constructor(props) {
    super(props);
    consoleShow('props', {
      componentName: 'ListingItemMask',
      props: this.props});
    this.childComponent.bind(this);
  }

  childComponent(type, data) {
    return <span className='templateComponent__textBody'>{data}</span>;
  }

  toggleShade(event) {
    consoleShow('line', {
      name: 'shade',
      object: event,
    });
  }

  render() {
    const {
      price,
      title,
      show,
      collectionName,
      path,
      type,
    } = this.props;

    const data = this.props.content;
    const content = this.props.content;

    //const contentComponent = this.childComponent(type, data);
    return (
      <Container hide={!show}>
        {/*Shade should always BEFORE content to avoid bleeding opacity!!!*/}
        <Shade />
        <ClickableLink href={`/${collectionName}/specific/${path}`} />
        <Summary>
          <span>
          {title}</span> {
            price ? <span>${price}</span> : null
          }
        </Summary>
      </Container>
    );
  }
}

ListingItemMask.propTypes = {
  content: PropTypes.object,
  price: PropTypes.number,
  style: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
  show: PropTypes.bool,
};
