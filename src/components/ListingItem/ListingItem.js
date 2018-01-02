import React, { Component } from 'react'; import PropTypes from 'prop-types';
import consoleShow from './../../util/debug/consoleShow';
import concatCssClasses from './../../util/concat/concatCssClasses';
//import { Link } from 'react-router';
import ListingItemMask from './ListingItemMask';

export default class ListingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMask: false,
    };
    consoleShow('props', {
      componentName: 'ListingItem',
      props: this.props});
    this.childComponent.bind(this);
  }

  childComponent(type, data) {
    return <span className='templateComponent__textBody'>{data}</span>;
  }

  toggleThing(event) {
    consoleShow('line', {
      name: 'test in listing toggle',
      object: event,
    });
    this.setState({
      showMask: !this.state.showMask,
    });
  }

  render() {
    //require('./ListingItem.scss');
    const style = concatCssClasses(this.props.style) || '';
    const containerLevelStyle = `listingItem__container ${style}`;
    const {
      collectionName,
      type,
      data,
      content,
    } = this.props;

    //const contentComponent = this.childComponent(type, data);
    return (
      <section className={containerLevelStyle}>
        <section className='listingItemDisplay__container'
          onMouseOver={this.toggleThing.bind(this)}
          onMouseOut={this.toggleThing.bind(this)}>
          <ListingItemMask
            price={content.price.regular}
            title={content.title}
            collectionName={content.collectionName}
            path={content.route.name}
            show={this.state.showMask}/>
          <section className='listingItemDisplay__imageAdjuster'>
            <img className='img-fluid listingItemDisplay__image' src={content.slideShow[0].images[0].url} />
          </section>
        </section>
      </section>
    );
  }
}

ListingItem.propTypes = {
  content: PropTypes.object,
  style: PropTypes.array,
  type: PropTypes.string,
};
