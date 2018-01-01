import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ContentSynchronizer from '../ContentSynchronizer/ContentSynchronizer';

export default class NotificationBar extends Component {
  constructor(props) {
    super(props);
    const isClosed = ContentSynchronizer.getProperty(this.content, 'site.flag.notificationBar.closed.manually', false);;

    this.state = {
      show: !isClosed,
    };
    this.getContentComponent.bind(this);
    this.getStyle.bind(this);
    this.close.bind(this);
  }

  componentWillMount() {
  }

  getStyle(name) {
    //TODO: may need to expand to allow multiple styles!
    const styleName = name[0];
    switch (styleName) {
      case 'center-text':
        return 'notificationBar__text--center';
      default:
        return 'style-name-not-found';
    }
  }

  getContentComponent(type, data) {
    /*this.setState({
      show: data.showAsDefault,
    });*/
    switch (type) {
      case 'textOnly':
        return <span className='notificationBar__textBody'>{data.text}</span>;
      case 'textWithBarLink':
        return <a className='notificationBar__textBody notificationBar__type--textWithBarLink' href={data.link}>{data.text}</a>;
      default:
        return 'Woops! No Notification Type Found!';
    }
  }

  close() {
    this.setState({
      show: !this.state.show,
    });
    ContentSynchronizer.updateNotificationBarStatus({
      contentUpdated: {
        date: Date.now(),
      },
      closed: {
        date: Date.now(),
        manually: this.state.show,
      }
    });
  }

  render() {
    //require('./NotificationBar.scss');
    const type = this.props.contentType;
    const data = this.props.contentData;
    const contentComponent = this.getContentComponent(type, data);
    const contentStyle = this.getStyle(this.props.contentStyle);
    const containerLevelStyle = this.state.show
      ? `notificationBar__container ${contentStyle}`
      : `notificationBar__container ${contentStyle}
        notificationBar__container--hide`;

    return (
      <section className={containerLevelStyle}>
        {contentComponent}
        <div className='notificationBar__closeButton' onClick={this.close.bind(this)}>x</div>
      </section>
    );
  }
}

NotificationBar.propTypes = {
  contentData: PropTypes.object.isRequired,
  contentStyle: PropTypes.array.isRequired,
  contentType: PropTypes.string.isRequired,
};
