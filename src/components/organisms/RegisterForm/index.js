import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Container from './style/Container';
import FormInput from '../FormInput';

export default function RegisterForm(props) {
  const {
    handleLogout,
    layout,
    statusCode,
    statusMessage,
    postEmailValidationPhrase,
    onChange,
    email,
    password,
    displayName,
    loggedIn,
    isRegistering,
    registerButtonTitle,
    handleRegister,
  } = props;

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
          ? <p>This Email is already registered! Please <a href="/user/login">login</a>!</p>
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

      <p>
        {statusMessage}
      </p>
      {
        loggedIn ?
          <Button color="primary" onClick={handleLogout}>
            Log Out
          </Button>
        :
          <Button disabled={isRegistering} color="primary" onClick={handleRegister}>
            {registerButtonTitle}
          </Button>
      }

    </Container>
  );
}

RegisterForm.propTypes = {
  isRegistering: PropTypes.bool,
  registerButtonTitle: PropTypes.string,
  layout: PropTypes.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleRegister: PropTypes.func,
  handleLogout: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  statusCode: PropTypes.string,
  statusMessage: PropTypes.string,
  postEmailValidationPhrase: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  displayName: PropTypes.string,
  loggedIn: PropTypes.bool,
};

RegisterForm.defaultProps = {
  isRegistering: false,
  registerButtonTitle: 'Register',
  layout: 'standAlone',
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleRegister: () => {},
  handleLogout: () => {},
  statusCode: '',
  statusMessage: '',
  postEmailValidationPhrase: '',
  email: '',
  password: '',
  displayName: '',
  loggedIn: false,
};
