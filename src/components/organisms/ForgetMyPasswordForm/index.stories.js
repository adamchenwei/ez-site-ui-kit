import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import ForgetMyPasswordForm from './index';
import OrganismName from '../../../storybookonly/CategoryName/OrganismName';

// TOOD: need case when login failed
function mockCallBack(log) { console.log(log || 'triggered'); }

storiesOf(`Component/${OrganismName}/ForgetMyPasswordForm/Stand Alone`, module)
  .add('Initial', () => {
    console.log(mockCallBack);
    console.log('1');
    return (<ForgetMyPasswordForm
      userInfo={{
      userName: '',
      password: '',
      loggedIn: false,
    }}
      layout="standAlone"
      handleReset={mockCallBack}
      handleForgetMyPasswordFormChange={mockCallBack}
    />);
  })
  .add('Resetting', () => {
    console.log('2');
    return (
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
    );
  })
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
