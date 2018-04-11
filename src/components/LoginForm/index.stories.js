import LoginForm from './index';
import { storiesOf } from '@storybook/react';

import React from 'react';

// TOOD: need case when login failed
function mockCallBack(log) { } // console.log(log || 'triggered');
function mockReturnRoute() {
  return {
    uri: 'https://www.google.com',
    name: 'Google Search',
  };
}
storiesOf('LoginForm/Stand Alone Version', module)
.add('Not Logged In', () => (<LoginForm
  userInfo={{
 userName: '',
 password: '',
 loggedIn: false,
}}
  layout="standAlone"
  handleLogin={mockCallBack}
  handleLogout={mockCallBack}
  handleLoginFormChange={mockCallBack}
  getReturnToRoute={mockCallBack}
/>)
.add('Logging In', () =>
// console.log('2');
(
  <LoginForm
   userInfo={{
   userName: 'adam@gmail.com',
   password: '123',
   loggedIn: false,
 }}
   layout="standAlone"
   loggingIn
   handleLogin={mockCallBack}
   handleLogout={mockCallBack}
   handleLoginFormChange={mockCallBack}
   getReturnToRoute={mockCallBack}
 />
)
.add('Logged In', () => (
<LoginForm
 userInfo={{
 displayName: 'Adam Chen Wei',
 userName: 'adamchenwei@gmail.com',
 password: '',
 loggedIn: true,
}}
 layout="standAlone"
 handleLogin={mockCallBack}
 handleLogout={mockCallBack}
 handleLoginFormChange={mockCallBack}
 getReturnToRoute={mockReturnRoute}
/>
))
.add('Logged In But Return Route is Missing', () => (
<LoginForm
 userInfo={{
 displayName: 'Adam Chen Wei',
 userName: 'adamchenwei@gmail.com',
 password: '',
 loggedIn: true,
}}
 layout="standAlone"
 handleLogin={mockCallBack}
 handleLogout={mockCallBack}
 handleLoginFormChange={mockCallBack}
 getReturnToRoute={mockCallBack}
/>
))
.add('Logged In But User Name is Missing', () => (
  <LoginForm
    userInfo={{
      displayName: '',
      userName: '',
      password: '',
      loggedIn: true,
    }}
    layout="standAlone"
    handleLogin={mockCallBack}
    handleLogout={mockCallBack}
    handleLoginFormChange={mockCallBack}
    getReturnToRoute={mockReturnRoute}
  />
));