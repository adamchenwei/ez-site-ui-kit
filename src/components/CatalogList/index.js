import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CatalogItem from './../CatalogItem';

export default class CatalogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      collection,
      style,
      type,
    } = this.props;
    if (!collection.data.length) return null;
    return (
      <Container fluid><Row>
        {collection.data.map((record) => {
          const {
            id,
            name,
            route,
            description,
            website,
            socialAccounts,
            locations,
            imamsList,
            phones,
            snapshots,
          } = record;

          const location = locations[0];
          const subTitle = `${location.city || ''}, ${location.state || ''} ${location.country || ''}`;
          return (
            <Col
              key={id}
              xs={{
                size: 12,
              }}
              sm={{
                size: 6,
              }}
              md={{
                size: 4,
              }}
              lg={{
                size: 4,
              }}
              xl={{
                size: 4,
              }}
            >
              <Link to={`/list/masjid/${route}/`}><CatalogItem
                id={id}
                title={name}
                location={location}
                subTitle={subTitle}
                description={description}
                websiteUrl={website}
                snapshots={snapshots}
              />
              </Link>
            </Col>
          );
        })}
      </Row>
      </Container>
    );
  }
}

CatalogList.propTypes = {
  collection: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  websiteUrl: PropTypes.string,
};
