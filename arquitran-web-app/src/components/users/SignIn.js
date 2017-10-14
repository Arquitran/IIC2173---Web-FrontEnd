import React, { Component } from 'react';
import Home from '../Home';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      user: '',
    }
  }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', this.state.password, this.state.user);
    this.setStateOnSubmit();
    this.props.authUser(this.state.user, this.state.password);

  }

  setStateOnSubmit() {
    this.setState({
      password: '',
      user: '',
    });
    this.password.value = '';
    this.user.value = '';
  }

  render() {
    if (localStorage.getItem("logged_in") === "true"){
      return <Home/>
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="mgtop container text-center">
        <h1>Sign In</h1>
        <div className="trip-form">

          <input ref={(input) => this.user = input}
            name="user"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='User'/>
          <input ref={(input) => this.password = input}
            name="password"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="password" placeholder='Password'/>
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit"/>
        </div>
      </form>
    )
  }

}

export default SignIn;
