import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link as RouteLink } from 'react-router-dom';
import CatalogItem from './../CatalogItem';

export default function CatalogList(props) {
  const {
    collection,
  } = props;
  if (!collection.data.length) return null;
  return (
    <Container fluid>
      <Row>
        {collection.data.map((record) => {
          const {
            id,
            name,
            route,
            description,
            website,
            // socialAccounts,
            locations,
            // imamsList,
            // phones,
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
              <RouteLink to={`/list/masjid/${route}/`}><CatalogItem
                id={id}
                title={name}
                location={location}
                subTitle={subTitle}
                description={description}
                websiteUrl={website}
                snapshots={snapshots}
              />
              </RouteLink>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

CatalogList.propTypes = {
  collection: PropTypes.objectOf(PropTypes.any),
};

CatalogList.defaultProps = {
  collection: {},
};
