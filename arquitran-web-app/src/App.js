import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import SignIn from './components/users/SignIn';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import ProductList from './components/products/ProductList';
import Product from './components/products/Product';

import {URL} from './index';

import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jwt: null,
      logged_in: false,
      categories: [],
      actualCategory: null,
      products: [],
      actual_product: null,
      shopping_cart: [],
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
    this.setState({ products: [], categories: [] })

    Axios.get(URL)
         .then(response => {
           response.data.map(product => {
             this.setState({ products: [...this.state.products, product] })
             if (this.state.categories.indexOf(product.context) === -1) {
               this.setState({ categories: [...this.state.categories, product.context] })
             }
             return true;
           })
           const actualCategory = this.state.categories[0];
           this.setState( {actualCategory} )
         })
         .catch(error => console.log(error));
  }

  setActualCategory(category) {
    this.setState({ actualCategory: category })
  }

fetchProduct(id) {
  console.log('fetchProduct', id);
  Axios.get(URL)
       .then(response => {
         response.data.map(product => {
           if (product.id === id) {
             this.setState({ actual_product: product })
             return true
           }
           return false
         })
       })
       .catch(error => console.log(error))
}

addProductToCart(product, quantity) {
  this.setState({ total_cart: this.state.total_cart + parseInt(quantity, 10) });

  this.state.shopping_cart.push({
    id: product.id,
    quantity: quantity,
    group: product.group,
    context: product.context,
    area: product.area
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
                         addProductToCart={(product, q) => this.addProductToCart(product, q)}/>}/>
            <Route path='/products' render = {props =>
                <ProductList fetchProducts={() => this.fetchProducts()}
                             products={this.state.products}
                             categories={this.state.categories}
                             actualCategory={this.state.actualCategory}
                             setActualCategory={(category) => this.setActualCategory(category)}/>}/>
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
