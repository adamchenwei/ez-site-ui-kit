import React, { Component } from 'react'; import PropTypes from 'prop-types';

export default class MobileCollapseMenu extends Component {
  constructor(props) {
    super(props);
    this.childComponent.bind(this);
    this.getStyle.bind(this);
    this.mobileMenuButton = this.mobileMenuButton.bind(this);
  }

  getStyle(style) {
    return style;
  }

  childComponent(type, data) {
    return <span className='templateComponent__textBody'>{data.text}</span>;
  }

  mobileMenuButton() {
    return (
      <section className='menuBar__mobileMenuButon'>
        <span>Menu</span>
      </section>
    );
  }

  render() {
    require('./MobileCollapseMenu.scss');
    const style = this.getStyle(this.props.style);
    const mobileMenuButton = this.mobileMenuButton();
    const containerLevelStyle = `templateComponent__container ${style}`;
    const type = this.props.type;
    const data = this.props.content;
    const contentComponent = this.childComponent(type, data);
    return (
      <section className={containerLevelStyle}>
        {contentComponent}
        {mobileMenuButton}
      </section>
    );
  }
}

MobileCollapseMenu.propTypes = {
  content: PropTypes.object.isRequired,
  style: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};
