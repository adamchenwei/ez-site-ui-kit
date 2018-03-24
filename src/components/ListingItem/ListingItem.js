import React, { Component } from 'react'; import PropTypes from 'prop-types';
import consoleShow from './../../util/debug/consoleShow';
import concatCssClasses from './../../util/concat/concatCssClasses';
// import { Link } from 'react-router-dom';
import ListingItemMask from './ListingItemMask';
import Container from './style/ListingItem/Container';
import Display from './style/ListingItem/Display';
import ImageAdjuster from './style/ListingItem/ImageAdjuster';
import Image from './style/ListingItem/Image';


export default class ListingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMask: false,
    };
    consoleShow('props', {
      componentName: 'ListingItem',
      props: this.props,
    });
    this.childComponent = this.childComponent.bind(this);
    this.toggleThing = this.toggleThing.bind(this);
  }

  childComponent(type, data) {
    return <span className="templateComponent__textBody">{data}</span>;
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
    const {
      collectionName,
      type,
      data,
      content,
    } = this.props;
    return (
      <Container>
        <Display
          onMouseOver={this.toggleThing}
          onMouseOut={this.toggleThing}
        >
          <ListingItemMask
            price={content.price.regular}
            title={content.title}
            collectionName={content.collectionName}
            path={content.route.name}
            show={this.state.showMask}
          />
          <ImageAdjuster>
            <Image src={content.slideShow[0].images[0].url} />
          </ImageAdjuster>
        </Display>
      </Container>
    );
  }
}

ListingItem.propTypes = {
  content: PropTypes.object,
  style: PropTypes.array,
  type: PropTypes.string,
};
