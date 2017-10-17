import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {

  render() {
    if (localStorage.getItem("logged_in") === 'true'){
      return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbot">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div><NavLink className="navbar-brand" to="/">Arquitran App</NavLink></div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/cart">{`Cart (${this.props.total_cart})`}</NavLink>
              </li>
            </ul>
            <button className="btn btn-outline-danger right-btn-menu" type="submit" onClick={this.props.logOut}>Log Out</button>
          </div>
        </nav>
      );
    }
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbot">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div><NavLink className="navbar-brand" to="/">Arquitran App</NavLink></div>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink>
            </li>
          </ul>
          <button className="btn btn-outline-primary right-btn-menu" type="submit"><NavLink to="/signin">Sign In</NavLink></button>
          <button className="btn btn-outline-primary right-btn-menu" type="submit"><NavLink to="/signup">Sign Up</NavLink></button>
        </div>
      </nav>
    );

  }
}

export default Navbar;
