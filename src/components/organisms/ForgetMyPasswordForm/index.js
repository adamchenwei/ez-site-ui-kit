import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

// import { Paper, Button } from 'material-ui';
import Container from './style/Container';
import FormInput from '../FormInput/index';

export default class ForgetMyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResetting: props.isResetting || false,
    };
    this.changeIsResettingState = this.changeIsResettingState.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.changeIsResettingState(true);
    this.props.handleReset(this.props.email);
  }

  changeIsResettingState(state) {
    setTimeout(() => {
      this.setState({
        isResetting: state,
      });
    });
  }

  render() {
    const {
      // userInfo,
      layout,
      statusCode,
      email,
      onChangeAction,
    } = this.props;

    // if (userInfo.loggedIn && this.state.isResetting) {
    //   this.changeIsResettingState(false);
    // }

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
          statusCode === 'ezeewei/email-resetted' ?
            <section style={formStyle.avatarContainer || null}>
              <h1>Reset Success! Please check your email for next step!</h1>
              <a href="/#">Bring me back to home page</a>
            </section> :
            <section style={formStyle.credentialInputs}>
              <FormInput
                title="Email"
                name="email"
                value={email}
                type="email"
                placeholder=""
                onChange={onChangeAction}
              />
            </section>
        }
        {
          statusCode === 'auth/invalid-email'
          ? <p>Email is invalid!</p>
          : null
        }
        {
          statusCode === 'auth/network-request-failed'
            ? <p>Are you still connected to the internet?</p>
            : null
        }

        {
          statusCode === 'auth/user-not-found'
            ? <p>{"We can't find your account! Would you like to"} <a href="/user/register">register as a new user</a>?</p>
            : null
        }

        {
          statusCode !== 'ezeewei/email-resetted'
          ?
            <Button
              disabled={this.state.isResetting && !statusCode}
              color="primary"
              onClick={this.reset}
            >
              {
                this.state.isResetting && !statusCode
                ? 'Resetting...'
                : 'Reset My Password'
              }
            </Button>
          : null
        }

      </Container>
    );
  }
}

ForgetMyPassword.propTypes = {
  // userInfo: PropTypes.objectOf(PropTypes.any),
  isResetting: PropTypes.bool,
  layout: PropTypes.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleReset: PropTypes.func.isRequired,
  onChangeAction: PropTypes.func.isRequired,
  statusCode: PropTypes.string,
  email: PropTypes.string,

};

ForgetMyPassword.defaultProps = {
  // userInfo: '',
  isResetting: false,
  layout: '',
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  statusCode: '',
  email: '',
};
