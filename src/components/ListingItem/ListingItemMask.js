import React, { Component } from 'react'; import PropTypes from 'prop-types';
import consoleShow from './../../util/debug/consoleShow';
import concatCssClasses from './../../util/concat/concatCssClasses';
import { Link } from 'react-router';

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
    require('./ListingItemMask.scss');
    const {
      price,
      title,
      show,
      collectionName,
      path,
      type,
    } = this.props;
    const style = concatCssClasses(this.props.style) || '';
    const containerLevelStyle = show
      ? `listingItemMask__container ${style}`
      : `listingItemMask__container listingItemMask__container--hide ${style}`;
    const data = this.props.content;
    const content = this.props.content;

    //const contentComponent = this.childComponent(type, data);
    return (
      <section className={containerLevelStyle}>
        {/*Shade should always BEFORE content to avoid bleeding opacity!!!*/}
        <section className='listingItemMask__shade' />
        <Link to={`/${collectionName}/specific/${path}`}
          className='listingItemMask__clickable'
          activeClassName='active' />
        <section className='listingItemMask__summary'>
          <span className='listingItemMask__title'>
          {title}</span> {
            price ? <span className='listingItemMask__price'>${price}</span> : null
          }
        </section>
      </section>
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
