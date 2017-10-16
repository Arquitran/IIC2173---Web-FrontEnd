import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
//import Product from './components/products/Product';
import SignIn from './components/users/SignIn';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import ProductList from './components/products/ProductList';
import Product from './components/products/Product';

//import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jwt: null,
      logged_in: false,
      products: [],
      actual_product: null,
      shopping_cart: [],
      shopping_cart_count: 0,
      total_cart:0

    }
  }

  authUser(user, password) {
    console.log('logIn');
    // LIBRERIA AXIOS PARA FETCH

    /*const url = "";
    return fetch(url,  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        auth: {
          email: user,
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
      localStorage.setItem('jwt', this.state.jwt);
      localStorage.setItem('logged_in', true);
  }

  logOut() {
    console.log('logOut');
    this.setState({
      jwt: null,
      logged_in: false,
    })
    localStorage.setItem('jwt', null);
    localStorage.setItem('logged_in', false);
    console.log(localStorage.getItem("logged_in"));
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
        {
          "name": "Product 1",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":1
        },
        {
          "name": "Product 2",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":2
        },
        {
          "name": "Product 3",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":3
        },
        {
          "name": "Product 4",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":4
        },
        {
          "name": "Product 5",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":5
        },
        {
          "name": "Product 6",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":6
        },
        {
          "name": "Product 7",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":7
        },
        {
          "name": "Product 8",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":8
        },
        {
          "name": "Product 9",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "id":9
        }
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
  //};shopping_cart
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
    actual_product: {
      "name": `Product ${id}`,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "id":id
    }
  });

}

addProductToCart(product_id, quantity, name) {
  this.setState({ total_cart: this.state.total_cart + parseInt(quantity, 10) });

  this.state.shopping_cart.push({
    product_id: product_id,
    quantity: quantity,
    id: this.state.shopping_cart_count,
    name
  })
  this.setState({shopping_cart_count: this.state.shopping_cart_count + 1})
  console.log(this.state.total_cart);

}

submitOrder(address) {
  //POST submit
  console.log("Post -> Order", address);
  this.setState({
    shopping_cart: [],
    shopping_cart_count: 0,
    total_cart:0
   })
}

  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar logOut={() => this.logOut()} total_cart={this.state.total_cart}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signin' render={props =>
                <SignIn authUser={() => this.authUser()}/>}/>
            <Route path='/products/:id' render = {props =>
                <Product {...props} fetchProduct={(id) => this.fetchProduct(id)}
                         product={this.state.actual_product}
                         addProductToCart={(id, quantity, name) => this.addProductToCart(id, quantity, name)}/>}/>
            <Route path='/products' render = {props =>
                <ProductList fetchProducts={() => this.fetchProducts()}
                             products={this.state.products}/>}/>
            <Route path='/cart' render = {props =>
                <Cart shopping_cart={this.state.shopping_cart}
                      submitOrder={(address) => this.submitOrder(address)}/>}/>
            <Route component={Page404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
