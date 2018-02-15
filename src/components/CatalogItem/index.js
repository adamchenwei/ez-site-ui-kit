import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class CatalogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      style,
      title,
      location,
      subTitle,
      description,
      websiteUrl,
      children,
      snapshots,
    } = this.props;
    const image = snapshots[0];
    return (
      <Card>
        <CardImg top width="100%" height="250px" src={image.url} alt={image.name} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subTitle}</CardSubtitle>
          <CardText>
              {description}
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

CatalogItem.propTypes = {
  id: PropTypes.number,
  style: PropTypes.object,
  title: PropTypes.string,
  location: PropTypes.shape({
    longitude: PropTypes.string,
    latitude: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }),
  subTitle: PropTypes.string,
  description: PropTypes.string,
  websiteUrl: PropTypes.string,
  snapshots: PropTypes.arrayOf(PropTypes.string),
};

CatalogItem.defaultProps = {
  id: 0,
  style: {},
  title: '',
  location: {
    longitude: '',
    latitude: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  },
  subTitle: '',
  description: '',
  websiteUrl: '',
  snapshots: [],
};