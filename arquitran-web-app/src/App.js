import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import SignIn from './components/users/SignIn';
import SignUp from './components/users/SignUp';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import ProductList from './components/products/ProductList';
import CategoryList from './components/products/CategoryList';
import Product from './components/products/Product';

import {URL_CATEGORIES, URL_PRODUCTS, MAX_PAGES} from './index';

import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jwt: null,
      logged_in: false,
      categories: [],
      actualCategory: null,
      actualSubCategory: null,
      SubCategories: [],
      products: [],
      actual_product: null,
      shopping_cart: [],
      total_cart:0,
      enableBuy: true,
      total_price: 0

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

  registerUser(name, user, address, password) {
    console.log('signUp');
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

  fetchSubCategories() {
    console.log('fetchSubCategories');
    this.setState({ subCategories: [], categories: [] })
    var i = 1;
    while (i < MAX_PAGES) {
      Axios.get(`${URL_CATEGORIES}?page=${i}`)
           .then(response => {
             if (response.data.length === 0) {
             }
             response.data.map(product => {
               this.setState({ subCategories: [...this.state.subCategories, product] })
               if (this.state.categories.indexOf(product.context) === -1) {
                 this.setState({ categories: [...this.state.categories, product.context] })
               }
               return true;
             })
             const actualCategory = this.state.categories[0];
             this.setState( {actualCategory} )
           })
           .catch(error => console.log(error));
           i += 1;
    }


  }

  fetchProducts(idSubCategory) {
    console.log('fetchProducts');
    this.setState({ products: [] })
    var i = 1;
    while (i < MAX_PAGES) {
      Axios.get(`${URL_PRODUCTS}?page=${i}`)
           .then(response => {
             response.data.map(product => {
               if (product.category === idSubCategory) {
                 this.setState({ products: [...this.state.products, product] })
               }
               return true;
             })
           })
           .catch(error => console.log(error));
           i += 1;
    }
  }

  setActualSubCategory(subCategory) {
    this.setState({ actualSubCategory: subCategory })
  }

  setActualCategory(category) {
    this.setState({ actualCategory: category })
  }

  enableBuy(bool) {
    this.setState({ enableBuy: bool })
  }

fetchProduct(id) {
  console.log('fetchProduct', id);
  var i = 1;
  while (i < MAX_PAGES) {
    Axios.get(`${URL_PRODUCTS}?Page=${i}`)
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
         i += 1;
  }

}

addProductToCart(product, quantity) {
  this.setState({ total_cart: this.state.total_cart + parseInt(quantity, 10) });
  this.setState({ total_price: this.state.total_price + parseInt(product.price, 10) })

  this.state.shopping_cart.push({
    id: product.id,
    quantity: quantity,
    name: product.name,
    price: product.price
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
    total_cart:0,
    total_price: 0
   })
}

  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar logOut={() => this.logOut()} total_cart={this.state.total_cart}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/web/signin' render={props =>
                <SignIn authUser={() => this.authUser()}/>}/>
            <Route path='/web/signup' render={props =>
                <SignUp registerUser={() => this.registerUser()}/>}/>
            <Route path='/web/categories/:idSubCategory/:id' render = {props =>
                <Product {...props} fetchProduct={(id) => this.fetchProduct(id)}
                         product={this.state.actual_product}
                         enableBuy={this.state.enableBuy}
                         addProductToCart={(product, q) => this.addProductToCart(product, q)}/>}/>
                       <Route path='/web/categories/:idSubCategory' render = {props =>
                <ProductList {...props} fetchProducts={(id) => this.fetchProducts(id)}
                             products={this.state.products}
                             categories={this.state.categories}
                             actualSubCategory={this.state.actualSubCategory}/>}/>
                           <Route path='/web/categories' render = {props =>
               <CategoryList fetchSubCategories={() => this.fetchSubCategories()}
                            subCategories={this.state.subCategories}
                            categories={this.state.categories}
                            actualCategory={this.state.actualCategory}
                            setActualSubCategory={(subCategory) => this.setActualSubCategory(subCategory)}
                            enableBuy={(bool) => this.enableBuy(bool)}
                            setActualCategory={(category) => this.setActualCategory(category)}/>}/>
                          <Route path='/web/cart' render = {props =>
                <Cart shopping_cart={this.state.shopping_cart}
                      total_price={this.state.total_price}
                      submitOrder={(address) => this.submitOrder(address)}/>}/>
            <Route component={Page404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
