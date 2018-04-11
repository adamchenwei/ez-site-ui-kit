import React, { Component } from 'react'; import PropTypes from 'prop-types';
import consoleShow from './../../util/debug/consoleShow';
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
    this.toggleThing = this.toggleThing.bind(this);
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
      content,
    } = this.props;
    return (
      <Container>
        <Display
          onMouseOver={this.toggleThing}
          onFocus={this.toggleThing}
          onBlur={this.toggleThing}
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
  content: PropTypes.objectOf(PropTypes.any).isRequired,
};
