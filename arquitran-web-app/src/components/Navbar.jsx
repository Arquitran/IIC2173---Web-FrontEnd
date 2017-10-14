import React, { Component } from 'react';
import NavLink from './NavLink';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
    }
  }

  componentWillMount(){
    if (this.props.reactLocalStorage.get('logged_in') === "true") {
      var token = this.props.reactLocalStorage.get('jwt');
      //var decode = jwt_decode(token);
      this.setState({
        //user_id: decode.sub
        user_id: 1
      })

    }
  }

  render() {
        if (this.props.reactLocalStorage.get('logged_in') === "false") {
          return (

            <nav className="navbar navbar-fixed-top">
              <div className="nav-container">
                <ul className="nav navbar-nav">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/products">Products</NavLink></li>
                  <li><NavLink to="/signin">SignIn</NavLink></li>
                </ul>
              </div>
            </nav>
          )
        }
        else {
          return (
          <nav className="navbar navbar-fixed-top">
            <div className="nav-container">
              <ul className="nav navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><a onClick={this.props.logOut}>Log Out</a></li>
              </ul>
            </div>
          </nav>
        )
      }
    }
  }

export default Navbar;
