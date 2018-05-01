import { storiesOf } from '@storybook/react';

import React from 'react';
import RegisterForm from './index';
import OrganismName from '../../../storybookonly/CategoryName/OrganismName';
import onChange from './../FormInput/service/onChange';

// TOOD: need case when Register failed
function mockCallBack(log) { console.log(log || 'triggered'); /*eslint-disable-line*/ }
class RegisterFormInteractive extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      displayName: '',
      loggedIn: false,
    };
    this.onChange = onChange.bind(this);
    this.onFormInputChange = this.onFormInputChange.bind(this);
  }

  onFormInputChange(event) {
    this.onChange(event);
  }

  render() {
    return (
      <RegisterForm
        {...this.state}
        layout="standAlone"
        handleRegister={mockCallBack}
        handleLogout={mockCallBack}
        onChange={this.onFormInputChange}
      />
    );
  }
}

storiesOf(`Component/${OrganismName}/RegisterForm/Stand Alone`, module)
  .add('interactive', () => (
    <RegisterFormInteractive />
  ))
  .add('initial', () => (
    <RegisterForm
      userInfo={{
        userName: '',
        password: '',
        displayName: '',
        loggedIn: false,
      }}
      layout="standAlone"
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
    />
  ))
  .add('status message', () => (
    <RegisterForm
      statusMessage="here is your status message from api"
      layout="standAlone"
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
    />
  ))
  .add('loggedin', () => (
    <RegisterForm
      userInfo={{
        userName: '',
        password: '',
        displayName: '',
        loggedIn: false,
      }}
      layout="standAlone"
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
      loggedIn
    />
  ))
  .add('registering', () => (
    <RegisterForm
      userInfo={{
        userName: 'adam',
        password: '123',
        displayName: 'Mr. Adam',
        loggedIn: false,
      }}
      layout="standAlone"
      isRegistering
      registerButtonTitle="registering..."
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
    />
  ))
  .add('already registered', () => (
    <RegisterForm
      userInfo={{
        userName: 'adam',
        password: '123',
        displayName: 'Mr. Adam',
        loggedIn: false,
      }}
      layout="standAlone"
      isRegistering
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
      statusCode="auth/email-already-in-use"
    />
  ))
  .add('network failure', () => (
    <RegisterForm
      userInfo={{
        userName: 'adam',
        password: '123',
        displayName: 'Mr. Adam',
        loggedIn: false,
      }}
      layout="standAlone"
      isRegistering
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
      statusCode="auth/network-request-failed"
    />
  ))
  .add('validation email sent without additional phrase', () => (
    <RegisterForm
      userInfo={{
        userName: 'adam',
        password: '123',
        displayName: 'Mr. Adam',
        loggedIn: false,
      }}
      layout="standAlone"
      isRegistering
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
      statusCode="ezeewei/validate-email"
    />
  ))
  .add('validation email sent with additional phrase', () => (
    <RegisterForm
      userInfo={{
        userName: 'adam',
        password: '123',
        displayName: 'Mr. Adam',
        loggedIn: false,
      }}
      layout="standAlone"
      isRegistering
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
      onChange={mockCallBack}
      statusCode="ezeewei/validate-email"
      postEmailValidationPhrase="
      And this is post email validation phrase addition!!!"
    />
  ));
