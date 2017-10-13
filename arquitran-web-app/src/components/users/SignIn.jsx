import React, {Component} from 'react';
import SignInForm from './SignInForm';

class SignIn extends Component {
  render() {
    return (
      <SignInForm authUser={this.props.authUser} />
    )
  }
}

export default SignIn;
