import React, { Component } from 'react';

export default class HeaderBar extends Component {
  render() {
    require('./HeaderBar.scss');
    const containerLevelStyle = 'headerBar__container';
    return (
      <section className={containerLevelStyle}>
        <h1> Header Bar</h1>
      </section>
    );
  }
}

HeaderBar.propTypes = {
};
