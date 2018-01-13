import React, { Component } from 'react'; import PropTypes from 'prop-types';
import {ContentSynchronizer} from 'ez-site-content';
import Container from './style/Container';
import TextBody from './style/TextBody';
import LinkBody from './style/LinkBody';
import CloseButton from './style/CloseButton';
export default class NotificationBar extends Component {
  constructor(props) {
    super(props);
    const isClosed = false;
    // TODO - this should NOT delete but move into a callback for fine tune functionalities
    //const isClosed = ContentSynchronizer.getProperty(this.content, 'site.flag.notificationBar.closed.manually', false);;

    this.state = {
      show: !isClosed,
    };
    this.getContentComponent.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
  }

  getContentComponent(type, data) {
    /*this.setState({
      show: data.showAsDefault,
    });*/
    switch (type) {
      case 'textOnly':
        return <TextBody>{data.text}</TextBody>;
      case 'textWithBarLink':
        return <LinkBody href={data.link}>{data.text}</LinkBody>;
      default:
        return 'Woops! No Notification Type Found!';
    }
  }

  close() {
    this.setState({
      show: !this.state.show,
    });
    // TODO - this should NOT delete but move into a callback for fine tune functionalities
    // ContentSynchronizer.updateNotificationBarStatus({
    //   contentUpdated: {
    //     date: Date.now(),
    //   },
    //   closed: {
    //     date: Date.now(),
    //     manually: this.state.show,
    //   }
    // });
  }

  render() {
    //require('./NotificationBar.scss');
    const type = this.props.contentType;
    const data = this.props.contentData;
    const contentComponent = this.getContentComponent(type, data);

    return (
      <Container hide={!this.state.show} centerText={this.props.contentStyle && this.props.contentStyle[0] === 'center-text'}>
        {contentComponent}
        <CloseButton onClick={this.close}>x</CloseButton>
      </Container>
    );
  }
}

NotificationBar.propTypes = {
  contentData: PropTypes.object.isRequired,
  contentStyle: PropTypes.array.isRequired,
  contentType: PropTypes.string.isRequired,
};
