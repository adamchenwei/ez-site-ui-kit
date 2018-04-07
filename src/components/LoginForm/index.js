import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import CredentialInput from './CredientialInput';
import axios from 'axios';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: props.loggingIn || false,
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.changeLoggingInState = this.changeLoggingInState.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    this.changeLoggingInState(true);
    this.props.handleLogin(this.props.userInfo.userName, this.props.userInfo.password, this.changeLoggingInState);
  }

  changeLoggingInState(state) {
    setTimeout(() => {
      this.setState({
        loggingIn: state,
      });
    });
  }
  handleFormChange(event, propertyName) {
    this.props.handleLoginFormChange(event, propertyName);
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
      getReturnToRoute,
    } = this.props;
    const COMPONENT_NAME = 'LoginForm';

    if (userInfo.loggedIn && this.state.loggingIn) {
      this.changeLoggingInState(false);
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
        phrase: {
          textAlign: 'center',
        },
      };
    }
    const returnToRoute = getReturnToRoute();
    return (
      <Paper style={formStyle.container || null}>
        {
          userInfo.loggedIn
          ? <section style={formStyle.avatarContainer || null}>
            <h1 style={formStyle.avatarContainer.phrase || null}>Welcome!</h1>
            <Avatar style={formStyle.avatarContainer.avatar || null}>
              {userInfo.displayName
                ? userInfo.displayName.charAt(0)
                : 'ME'}
            </Avatar>

            {
                returnToRoute
                ? <p style={formStyle.avatarContainer.phrase || null}>Bring me back to <a href={returnToRoute.uri}>{returnToRoute.name}</a></p>
                : null
              }
            </section>
          : <section style={formStyle.credentialInputs}>
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
            ? <p>Are you still connected to the internet?</p>
            : null
        }

        {
          statusCode === 'auth/user-not-found'
            ? <p>We can't find your account! Would you like to <a href="/#/register">register as a new user</a>?</p>
            : null
        }

        {
          userInfo.loggedIn
          ? <Button raised color="primary" onClick={handleLogout}>
              Log Out
            </Button>
          : <Button raised disabled={this.state.loggingIn} color="primary" onClick={this.login}>
            {
                this.state.loggingIn
                ? 'Loading...'
                : 'Log In'
              }
            </Button>
        }

      </Paper>
    );
  }
}

LoginForm.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  userInfo: PropTypes.object,
  loggingIn: PropTypes.bool,
  layout: PropTypes.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleLogin: PropTypes.any,
  handleLogout: PropTypes.any,
  handleLoginFormChange: PropTypes.any,
  statusCode: PropTypes.string,
  getReturnToRoute: PropTypes.any,
};
