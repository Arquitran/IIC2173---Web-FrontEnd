import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {

  updateSearch = (e) => {
    this.setState({
      actualSearch: e.target.value
    })
  }

  render() {
    //if (localStorage.getItem("logged_in") === "true"){
    if (this.props.token !== '') {
      return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbot">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div><NavLink className="navbar-brand" to="/web">Arquitran App</NavLink></div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/web">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/web/categories">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/web/history">History</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/web/cart">{`Cart (${this.props.total_cart})`}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/web" onClick={this.props.logOut}>Log Out</NavLink>
              </li>
            </ul>
            <input className='right-btn-menu' type="text" placeholder="Search..." value = {this.props.actualSearch} onChange={this.props.updateSearchValue}/>
            <NavLink className="btn nav-link" to="/web/search">Search</NavLink>
          </div>
        </nav>
      );
    }
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbot">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div><NavLink className="navbar-brand" to="/web">Arquitran App</NavLink></div>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/web">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/web/categories">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/web/signin">Sign In</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" activeClassName="active" to="/web/signup">Sign Up</NavLink>
            </li>
          </ul>
          <input className='right-btn-menu' type="text" placeholder="Search..." value = {this.props.actualSearch} onChange={this.props.updateSearchValue}/>
          <NavLink className="btn nav-link" to="/web/search" >Search</NavLink>
        </div>
      </nav>
    );

  }
}

export default Navbar;
