import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import get from 'lodash/get';
import SnapshotDisplay from './../SnapshotDisplay';

export default function CatalogItem(props) {
  const {
    title,
    subTitle,
    description,
    snapshots,
  } = props;
  const image = get(snapshots, '[0]', {});
  const {
    url,
    name,
  } = image;
  return (
    <Card>
      <SnapshotDisplay
        snapshotSrc={url}
        alt={name}
      />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subTitle}</CardSubtitle>
        <CardText>
          {description}
        </CardText>
      </CardBody>
    </Card>
  );
}

CatalogItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  snapshots: PropTypes.arrayOf(PropTypes.object),
};

CatalogItem.defaultProps = {
  title: '',
  subTitle: '',
  description: '',
  snapshots: [],
};
