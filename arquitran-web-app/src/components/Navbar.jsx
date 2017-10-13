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
  }

  render() {

      return (
        <nav className="navbar navbar-fixed-top">
          <div className="nav-container">
            <ul className="nav navbar-nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
            </ul>
          </div>
        </nav>
      )
    }
  }

export default Navbar;
