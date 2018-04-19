import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Card, Button, Avatar } from 'material-ui';
import CredentialInput from './CredientialInput';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistering: props.isRegistering || false,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.changeRegisteringState = this.changeRegisteringState.bind(this);
    this.registerNewUser = this.registerNewUser.bind(this);
  }

  registerNewUser() {
    this.changeRegisteringState(true);
    this.props.handleRegister(this.props.userInfo.userName,
      this.props.userInfo.password,
      this.props.userInfo.displayName,
      this.changeRegisteringState);
  }

  changeRegisteringState(state) {
    setTimeout(() => {
      this.setState({
        isRegistering: state,
      });
    });
  }
  handleFormChange(event,
    propertyName) {
    this.props.handleRegisterFormChange(event, propertyName);
  }

  render() {
    const {
      content,
      style,
      type,
      handleLogout,
      userInfo,
      layout,
      statusCode,
      postEmailValidationPhrase,
    } = this.props;
    const COMPONENT_NAME = 'RegisterForm';

    if (userInfo.loggedIn && this.state.isRegistering) {
      this.changeRegisteringState(false);
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
          userInfo.loggedIn
          ? <section style={formStyle.avatarContainer || null}>
            <h1>Welcome!</h1>
            <Avatar style={formStyle.avatarContainer.avatar || null}>
              {userInfo.displayName
                ? userInfo.displayName.charAt(0)
                : 'ME'}
            </Avatar>
            </section>
          : <section style={formStyle.credentialInputs}>
            <CredentialInput
              htmlIdName="DisplayNameInput"
              inputTitle="Display Name"
              inputType="text"
              contentObjectName="displayName"
              contentEmptyState={{ displayName: '' }}
              contentObjectPropertyValue={userInfo.displayName}
              contentObjectPropertyName=""
              index={null}
              event={null}
              handleFormChange={(event) => { this.handleFormChange(event, 'displayName'); }}
            />
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

            <CredentialInput
              htmlIdName="PasswordInput"
              inputTitle="Password"
              inputType="password"
              contentObjectName="password"
              contentEmptyState={{ password: '' }}
              contentObjectPropertyValue={userInfo.password}
              contentObjectPropertyName="password"
              index={null}
              event={null}
              handleFormChange={(event) => { this.handleFormChange(event, 'password'); }}
            />
            </section>
        }

        {
          statusCode === 'auth/network-request-failed'
            ? <p>Check the internet connection? try again later?</p>
            : null
        }

        {
          statusCode === 'auth/email-already-in-use'
            ? <p>This Email is already registered! Please <a href="/#/login">login</a>!</p>
            : null
        }

        {
          this.state.isRegistering && !statusCode
            ? <p>hold on, we are writing a very important message for you here...</p>
            : null
        }
        {
          statusCode === 'ezeewei/validate-email'
            ? <p>We just sent a email to validate your email address!{postEmailValidationPhrase}
              </p>
            : null
        }

        {
          userInfo.loggedIn
          ? <Button raised color="primary" onClick={handleLogout}>
              Log Out
            </Button>
          : <Button raised disabled={this.state.isRegistering && !statusCode} color="primary" onClick={this.registerNewUser}>
            {
                this.state.isRegistering && !statusCode
                ? 'Registering...'
                : 'Register & Enjoy!'
              }
            </Button>
        }

      </Paper>
    );
  }
}

RegisterForm.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  userInfo: PropTypes.object,
  isRegistering: PropTypes.bool,
  layout: PropTypes.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleRegister: PropTypes.any,
  handleLogout: PropTypes.any,
  handleRegisterFormChange: PropTypes.any,
  statusCode: PropTypes.string,
  postEmailValidationPhrase: PropTypes.any,
};
