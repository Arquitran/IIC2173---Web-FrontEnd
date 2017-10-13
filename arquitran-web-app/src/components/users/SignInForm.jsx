import React, {Component} from 'react';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    }
  }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    console.log('handleSubmit', this.state.password, this.state.email);
    this.props.authUser(this.state.email, this.state.password);
    this.setStateOnSubmit()
    event.preventDefault();

  }

  setStateOnSubmit() {
    this.setState({
      password: '',
      email: '',
    });
    this.password.value = '';
    this.email.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="sign-in-form">
        <h1>Sign In</h1>
        <div className="trip-form">

          <input ref={(input) => this.email = input}
            name="email"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Email'/>
          <input ref={(input) => this.password = input}
            name="password"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="password" placeholder='Password'/>
          <input
            className="btn btn-default"
            type="submit"
            value="Submit"/>
        </div>
      </form>
    )
  }
}

export default SignInForm;
