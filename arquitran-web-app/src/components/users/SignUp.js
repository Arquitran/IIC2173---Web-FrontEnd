import React, { Component } from 'react';
import Home from '../Home';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      user: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.confirm_password !== this.state.password){
      console.log('handleSubmit', "password missmatch");

    } else {
      this.setStateOnSubmit();
      this.props.registerUser(this.state.user,this.state.password);
    }

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
    if (this.props.token !== ''){
      return <Home/>      
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="mgtop container text-center">
        <h1>Sign Up</h1>
        <div className="trip-form">
          <input ref={(input) => this.user = input}
            name="user"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Email'/>
          <input ref={(input) => this.password = input}
            name="password"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="password" placeholder='Password'/>
          <input ref={(input) => this.password = input}
            name="confirm_password"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="password" placeholder='Confirm Password'/>
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit"/>
        </div>
      </form>
    )
  }

}

export default SignUp;
