import React, { Component } from 'react';

export default class Error404Page extends Component {
  render() {
    require('./Error404Page.scss');
    return (
      <section className="error404Page__container">
        WOOPS! We can't find it! Lets chat!
      </section>
    );
  }
}
