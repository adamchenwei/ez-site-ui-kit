import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ContentGrid from '../../components/ContentGrid/ContentGrid';
import ContentSynchronizer from '../../components/ContentSynchronizer/ContentSynchronizer';

export default class Page extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    require('./Page.scss');
    const routeParams = this.props.params;
    const content = ContentSynchronizer.getContent();
    const grids = content.grids;
    const gridContainerProperties = content.gridContainerProperties;
    return (
      <section className='page__container'>
        <ContentGrid gridItems={grids}
          gridContainerProperties={gridContainerProperties} />
      </section>
    );
  }
}

Page.propTypes = {
};
