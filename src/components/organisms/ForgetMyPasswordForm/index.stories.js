import { storiesOf } from '@storybook/react';
import React from 'react';
import ForgetMyPasswordForm from './index';
import OrganismName from '../../../storybookonly/CategoryName/OrganismName';
import consoleShow from '../../../util/debug/consoleShow';

// TOOD: need case when login failed
function mockCallBack(log) { consoleShow(log); }

storiesOf(`Component/${OrganismName}/ForgetMyPasswordForm/Stand Alone`, module)
  .add('Initial', () => (
    <ForgetMyPasswordForm
      userInfo={{
      userName: '',
      password: '',
      loggedIn: false,
    }}
      layout="standAlone"
      handleReset={mockCallBack}
      handleForgetMyPasswordFormChange={mockCallBack}
    />))
  .add('Resetting', () => (
    <ForgetMyPasswordForm
      userInfo={{
      userName: 'adam@gmail.com',
      password: '123',
      loggedIn: false,
    }}
      layout="standAlone"
      isResetting
      handleReset={mockCallBack}
      handleForgetMyPasswordFormChange={mockCallBack}
    />
  ))
  .add('Resetted', () => (
    <ForgetMyPasswordForm
      userInfo={{
      displayName: 'Adam Chen Wei',
      userName: 'adamchenwei@gmail.com',
      password: '',
      loggedIn: true,
    }}
      layout="standAlone"
      handleReset={mockCallBack}
      handleForgetMyPasswordFormChange={mockCallBack}
    />
  ));
