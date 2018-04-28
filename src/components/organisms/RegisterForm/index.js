import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Container from './style/Container';
import FormInput from '../FormInput';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  // changeRegisteringState(state) {
  //   setTimeout(() => {
  //     this.setState({
  //       isRegistering: state,
  //     });
  //   });
  // }

  render() {
    const {
      handleLogout,
      layout,
      statusCode,
      postEmailValidationPhrase,
      onChange,
      email,
      password,
      displayName,
      loggedIn,
      isRegistering,
      handleRegister,
    } = this.props;

    if (loggedIn && isRegistering) {
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
      <Container style={formStyle.container || null}>
        {
          loggedIn ?
            <section style={formStyle.avatarContainer || null}>
              <h1>Welcome!</h1>
              {/* <Avatar style={formStyle.avatarContainer.avatar || null}>
                {userInfo.displayName
                  ? userInfo.displayName.charAt(0)
                  : 'ME'}
              </Avatar> */}
            </section>
          :
            <section style={formStyle.credentialInputs}>
              <FormInput
                title="Full Name"
                name="displayName"
                value={displayName}
                type="text"
                placeholder="i.e. John B. Adam"
                onChange={onChange}
              />
              <FormInput
                title="Email"
                name="email"
                value={email}
                type="email"
                placeholder="i.e. abc@gmail.com"
                onChange={onChange}
              />
              <FormInput
                title="Password"
                name="password"
                value={password}
                type="password"
                placeholder=""
                onChange={onChange}
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
          isRegistering && !statusCode
            ? <p>hold on, we are writing a very important message for you here...</p>
            : null
        }
        {
          statusCode === 'ezeewei/validate-email' ?
            <p>
              We just sent a email to validate your email address!{postEmailValidationPhrase}
            </p>
            : null
        }

        {
          loggedIn ?
            <Button color="primary" onClick={handleLogout}>
              Log Out
            </Button>
          :
            <Button disabled={isRegistering && !statusCode} color="primary" onClick={handleRegister}>
              {
                isRegistering && !statusCode
                ? 'Registering...'
                : 'Register & Enjoy!'
              }
            </Button>
        }

      </Container>
    );
  }
}

RegisterForm.propTypes = {
  isRegistering: PropTypes.bool,
  layout: PropTypes.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleRegister: PropTypes.func,
  handleLogout: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  statusCode: PropTypes.string,
  postEmailValidationPhrase: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  displayName: PropTypes.string,
  loggedIn: PropTypes.bool,
};

RegisterForm.defaultProps = {
  userInfo: {},
  isRegistering: false,
  layout: 'standAlone',
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleRegister: () => {},
  handleLogout: () => {},
  statusCode: '',
  postEmailValidationPhrase: '',
  email: '',
  password: '',
  displayName: '',
  loggedIn: false,
};
