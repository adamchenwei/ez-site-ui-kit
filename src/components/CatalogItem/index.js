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
      <Col
        key={id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
      </Col>
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
