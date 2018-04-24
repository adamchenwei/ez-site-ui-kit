import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
// import Avatar from 'material-ui/Avatar';
import CredentialInput from './CredientialInput';
import Container from './style/Container';

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
    this.props.handleLogin(this.props.userInfo.userName,
      this.props.userInfo.password, this.changeLoggingInState);
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
      handleLogout,
      userInfo,
      layout,
      statusCode,
      getReturnToRoute,
    } = this.props;

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
      <Container style={formStyle.container || null}>
        {
          userInfo.loggedIn ?
            <section style={formStyle.avatarContainer || null}>
              <h1 style={formStyle.avatarContainer.phrase || null}>Welcome!</h1>
              {/* <Avatar style={formStyle.avatarContainer.avatar || null}>
                {userInfo.displayName
                  ? userInfo.displayName.charAt(0)
                  : 'ME'}
              </Avatar> */}

              {
                  returnToRoute ?
                    <p style={formStyle.avatarContainer.phrase || null}>
                      Bring me back to <a href={returnToRoute.uri}>{returnToRoute.name}</a>
                    </p>
                  : null
                }
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
            ? <p>{"We can't find your account! Would you like to"} <a href="/#/register">register as a new user</a>?</p>
            : null
        }

        {
          userInfo.loggedIn ?
            <Button raised color="primary" onClick={handleLogout}>
              Log Out
            </Button> :
            <Button raised disabled={this.state.loggingIn} color="primary" onClick={this.login}>
              {
                this.state.loggingIn
                ? 'Loading...'
                : 'Log In'
              }
            </Button>
        }

      </Container>
    );
  }
}

LoginForm.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
  loggingIn: PropTypes.bool,
  layout: PropTypes.string,
  statusCode: PropTypes.string.isRequired,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleLoginFormChange: PropTypes.func.isRequired,
  getReturnToRoute: PropTypes.func,
};

LoginForm.defaultProps = {
  loggingIn: false,
  layout: 'standAlone',
  userInfo: {
    displayName: '',
    userName: '',
    password: '',
    loggedIn: false,
  },
  getReturnToRoute: () => ({
    name: 'Home',
    uri: '/',
  }),
};
