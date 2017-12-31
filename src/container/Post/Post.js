import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ContentSynchronizer from '../../components/ContentSynchronizer/ContentSynchronizer';

export default class Post extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    require('./Post.scss');
    const routeParams = this.props.params;
    const PostRef = routeParams.PostRef;
    let content = {};
    // console.log('Post route');
    // console.log(routeParams); //eslint-disable-line
    // console.log(ContentSynchronizer.getStorageName()); //eslint-disable-line
    if (!PostRef) {
      content = ContentSynchronizer.getItem('Posts');
    } else {
      content = ContentSynchronizer.getItem('Posts', 'name', PostRef, true);
    }
    //console.log(content);
    return (
      <section className='post__container'>
        <section> A Post </section>
      </section>
    );
  }
}

Post.propTypes = {
};
