import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class CatalogList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {
      collection,
      style,
      type,
    } = this.props;
    console.log(collection.data)
    if (!collection.data.length) return null;
    return (
      <Container fluid><Row>
        {collection.data.map((item) => {
          const {
            id,
            title,
            description,
            route,
          } = item;
          return (
            <Col
              key={id}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              xl={2}>
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
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row></Container>
    );
  }
}

CatalogList.propTypes = {
  collection: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
};
