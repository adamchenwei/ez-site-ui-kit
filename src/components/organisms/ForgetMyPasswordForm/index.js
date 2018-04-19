import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Card, Button, Avatar } from 'material-ui';
import CredentialInput from './CredientialInput';

export default class ForgetMyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResetting: props.isResetting || false,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.changeIsResettingState = this.changeIsResettingState.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.changeIsResettingState(true);
    this.props.handleReset(this.props.userInfo.userName, this.props.userInfo.password, this.changeIsResettingState);
  }

  changeIsResettingState(state) {
    setTimeout(() => {
      this.setState({
        isResetting: state,
      });
    });
  }
  handleFormChange(event, propertyName) {
    this.props.handleForgetMyPasswordFormChange(event, propertyName);
  }

  render() {
    const {
      content,
      style,
      type,
      userInfo,
      layout,
      statusCode,
    } = this.props;
    const COMPONENT_NAME = 'ForgetMyPassword';

    if (userInfo.loggedIn && this.state.isResetting) {
      this.changeIsResettingState(false);
    }

    const formStyle = {
      container: {
        marginTop: '24px',
        marginBottom: '24px',
      },
    };
    if (layout === 'standAlone') {
      formStyle.container.display = 'flex';
      formStyle.container.flexFlow = 'column';
      formStyle.credentialInputs = {
        display: 'flex',
        flexFlow: 'column',
      };
      formStyle.avatarContainer = {
        alignSelf: 'center',
        margin: '24px',
        avatar: {
          margin: '0 auto',
        },
      };
    }
    return (
      <Paper style={formStyle.container || null}>
        {
          statusCode === 'ezeewei/email-resetted' ?
            <section style={formStyle.avatarContainer || null}>
              <h1>Reset Success! Please check your email for next step!</h1>
              <a href="/#">Bring me back to home page</a>
            </section> :
            <section style={formStyle.credentialInputs}>
              <CredentialInput
                htmlIdName="UserNameInput"
                inputTitle="User Email"
                inputType="email"
                contentObjectName="userName"
                contentEmptyState={{ userName: '' }}
                contentObjectPropertyValue={userInfo.userName}
                contentObjectPropertyName=""
                index={null}
                event={null}
                handleFormChange={(event) => { this.handleFormChange(event, 'userName'); }}
              />
            </section>
        }
        {
          statusCode === 'auth/invalid-email'
          ? <p>Email is invalid!</p>
          : null
        }
        {
          statusCode === 'auth/network-request-failed'
            ? <p>Are you still connected to the internet?</p>
            : null
        }

        {
          statusCode === 'auth/user-not-found'
            ? <p>We can't find your account! Would you like to <a href="/#/register">register as a new user</a>?</p>
            : null
        }

        {
          statusCode !== 'ezeewei/email-resetted'
          ? <Button raised disabled={this.state.isResetting && !statusCode} color="primary" onClick={this.reset}>
            {
                this.state.isResetting && !statusCode
                ? 'Resetting...'
                : 'Reset My Password'
              }
            </Button>
          : null
        }

      </Paper>
    );
  }
}

ForgetMyPassword.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  userInfo: PropTypes.object,
  isResetting: PropTypes.bool,
  layout: PropTypes.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleReset: PropTypes.any,
  handleForgetMyPasswordFormChange: PropTypes.any,
  statusCode: PropTypes.string,
};
