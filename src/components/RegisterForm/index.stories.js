import RegisterForm from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

// TOOD: need case when Register failed
function mockCallBack(log) { console.log(log || 'triggered'); }

storiesOf('RegisterForm/Stand Alone Version', module)
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
      handleRegister={mockCallBack}
      handleLogout={mockCallBack}
      handleRegisterFormChange={mockCallBack}
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
      statusCode="ezeewei/validate-email"
      postEmailValidationPhrase="
      And this is post email validation phrase addition!!!"
    />
  ));
