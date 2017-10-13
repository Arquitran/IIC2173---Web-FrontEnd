import React, { Component } from 'react';
import Navbar  from './components/Navbar';
import {reactLocalStorage} from 'reactjs-localstorage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      products_count: 0,
      actual_product: [],
      jwt:  reactLocalStorage.get('jwt', null),
      logged_in:  reactLocalStorage.get('logged_in', false)
    }
  }


  fetchProducts() {
    console.log('fetchProducts');
    //const url = "";
    //const options = {
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //};
    //return fetch(url, options)
      //.then(data => data.json())
      //.then(data => {
      //  this.setState({
      //    products: data,
      //    products_count: data.lenght,
      //    error: null,
      //  });
      //})
      //.catch(err => {
      //  console.log('error in fetchProducts', err);
      //});
    this.setState({
      products: [
        {"name": "Producto 1", "description": "Description product 1", "id":1},
        {"name": "Producto 2", "description": "Description product 2", "id":2}
      ],
      products_count: 2,
      error: null,
    })
  }

  fetchProduct(id) {
    console.log('fetchProduct', id);
    //const url = ""+id;
    //const options = {
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //};
    //return fetch(url, options)
    //  .then(data => data.json())
    //  .then(data => {
    //    this.setState({
    //      actual_product: data,
    //      error: null,
    //    });
    //  })
    //  .catch(err => {
    //    console.log('error in fetchProduct',err);
    //  });
    this.setState({
      actual_product: [
        {"name": "Producto hardcodeadi", "description": "Description product hardcodeadi"}
      ],
      error: null,
    })
  }

  authUser(email, password) {
    console.log('authUser');
    /*const url = "";
    return fetch(url,  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        auth: {
          email: email,
          password: password
        }
      })
    })
      .then(data => data.json())
      .then(data => {
        this.setState({
          jwt: data.jwt,
          logged_in: true
        });
        console.log(data.jwt);
        reactLocalStorage.set('jwt', data.jwt);
        reactLocalStorage.set('logged_in', true);
      })
      .catch(err => {
        console.log('error in authUser',err);
      });
      */

      this.setState({
        jwt: "some jwt",
        logged_in: true
      });
      //to save user information
      reactLocalStorage.set('jwt', this.state.jwt);
      reactLocalStorage.set('logged_in', this.state.logged_in);
  }

  logOut() {
    console.log('logOut');
    this.setState({
      jwt: null,
      logged_in: false,
    })
    reactLocalStorage.set('jwt', null);
    reactLocalStorage.set('logged_in', false);
  }

  render() {
    return (
      <div>
        <Navbar reactLocalStorage={reactLocalStorage} logOut={this.logOut.bind(this)}/>
        <div className="">
          {React.Children.map(
            this.props.children,
            child => React.cloneElement(child,
              {
                fetchProducts: this.fetchProducts.bind(this),
                fetchProduct:  this.fetchProduct.bind(this),

                products: this.state.products,
                actual_product: this.state.actual_product,

                authUser: this.authUser.bind(this),
                logOut: this.logOut.bind(this),
              })
          ) }
        </div>
      </div>
    );
  }
}

export default App;
