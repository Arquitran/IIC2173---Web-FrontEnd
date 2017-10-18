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
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', this.state.name, this.state.user,
      this.state.address, this.state.password);
    if (this.state.confirm_password !== this.state.password){
      console.log('handleSubmit', "password missmatch");

    } else {
      this.setStateOnSubmit();
      this.props.registerUser(this.state.name, this.state.user,
        this.state.address, this.state.password);
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
    if (localStorage.getItem("logged_in") === "true"){
      return <Home/>
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="mgtop container text-center">
        <h1>Sign Up</h1>
        <div className="trip-form">
          <input ref={(input) => this.user = input}
            name="name"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Name'/>
          <input ref={(input) => this.user = input}
            name="user"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='User'/>
          <input ref={(input) => this.user = input}
            name="address"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Address'/>
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
