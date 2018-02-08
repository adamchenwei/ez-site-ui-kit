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
      title,
      description,
      route,
      children,
    } = this.props;
    return (
      <Card>
        <CardImg top width="100%" src="/assets/images/logo.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{route.webRoute}</CardSubtitle>
          <CardText>
              {description}
          </CardText>
          <Button>Website</Button>
          <Button>Direction</Button>
          <Button>Phone</Button>
          {children}
        </CardBody>
      </Card>
    )
  }
}

CatalogItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  route: PropTypes.shape({
    webRoute: PropTypes.string,
  }),
};
