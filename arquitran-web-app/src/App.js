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
import SearchProduct from './components/products/SearchProduct'

import {URL_CATEGORIES, URL_PRODUCTS, URL_SIGNUP, URL_SIGNIN, URL_CART,URL_HISTORY, MAX_PAGES} from './index';

import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
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
      total_price: 0,
      actualSearch: ''

    }
  }

  authUser = (user, password) => {
    console.log('logIn');
    // LIBRERIA AXIOS PARA FETCH

    let that = this
    Axios.post(URL_SIGNIN, {
      "email": user,
      password
    }, {
      'Access-Control-Allow-Origin': '*'
    })
    .then(function(response) {
      that.setState({
        token: response.data.token
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('logged_in', true)
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  registerUser = (user,password) => {
    console.log('signUp');
    /*
      this.setState({
        jwt: "some jwt",
        logged_in: true
      });
      //to save user information
      localStorage.setItem('jwt', this.state.jwt);
      localStorage.setItem('logged_in', true);*/
    let that = this
    Axios.post(URL_SIGNUP, {
      "email": user,
      password
    }, {
      'Access-Control-Allow-Origin': '*'
    })
    .then(function(response) {
      that.setState({
        token: response.data.token
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('logged_in', true)
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  logOut() {
    console.log('logOut');
    this.setState({
      token: ''
    })
    localStorage.setItem('token', '')
    localStorage.setItem('logged_in', false)
    /*
    this.setState({
      jwt: null,
      logged_in: false,
    })
    localStorage.setItem('jwt', null);
    localStorage.setItem('logged_in', false);
    console.log(localStorage.getItem("logged_in"));
    */

  }

  fetchSubCategories() {
    console.log('fetchSubCategories');
    this.setState({ subCategories: [], categories: [] })
    var i = 1;
    while (i < MAX_PAGES) {
      Axios.get(`${URL_CATEGORIES}?page=${i}`, {headers: {'Access-Control-Allow-Origin': '*'}})
           .then(response => {
             console.log(response);
             if (response.data.length === 0) {
             }
             response.data.categories.map(product => {
               let id = product.pk;
               let category = product.fields;
               category['id'] = id;

               //category = Object.assign({}, category.fields, {id: category.pk})
               this.setState({ subCategories: [...this.state.subCategories, category] })
               if (this.state.categories.indexOf(category.context) === -1) {
                 this.setState({ categories: [...this.state.categories, category.context] })
               }
               return true;
             })
             console.log("**", this.state.categories);
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
      Axios.get(`${URL_PRODUCTS}?page=${i}`, {headers: {'Access-Control-Allow-Origin': '*'}})
           .then(response => {
             console.log("*response", response);
             response.data.products.map(item => {
               let id = item.pk;
               let product = item.fields;
               product['id'] = id;
               //product = Object.assign({}, product.fields, {id: product.pk})
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

  fetchSearch(keyword) {
    console.log('search by keyword: ' + keyword)
    this.setState({ products: [] })
    let i = 1;
    while (i < MAX_PAGES) {
      Axios.get(`${URL_PRODUCTS}?page=${i}`)
           .then(response => {
             response.data.products.map(item => {
               let id = item.pk;
               let product = item.fields;
               product['id'] = id;

               //product = Object.assign({}, product.fields, {id: product.pk})
               if (product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
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
    Axios.get(`${URL_PRODUCTS}?page=${i}`)
         .then(response => {
           response.data.map(product => {
             product = Object.assign({}, product.fields, {id: product.pk})
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
  console.log("Post -> Order", address);
  let jsonB = []
  this.state.shopping_cart.forEach(function(cart_item) {
    let innerItem = {}
    innerItem['product_id'] = cart_item.id
    innerItem['amount'] = cart_item.quantity
    jsonB.push(innerItem)
  })
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': this.state.token
  }
  let that = this
  Axios.post(URL_CART, jsonB, headers)
  .then(function(response) {
    that.state.shopping_cart.forEach(function(cart_item) {
      if (response.data[cart_item.id] === 0) {
        alert("El producto " + cart_item.name + " no pudo ser comprado")
      }
    })
    that.setState({
      shopping_cart: [],
      shopping_cart_count: 0,
      total_cart:0,
      total_price: 0
     })
  })
  .catch(function(error){
    console.log(error)
    that.setState({
      shopping_cart: [],
      shopping_cart_count: 0,
      total_cart:0,
      total_price: 0
     })
  })
}

  updateSearchValue(e) {
    this.setState({
      actualSearch: e.target.value
    })
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar logOut={() => this.logOut()} total_cart={this.state.total_cart} token={this.state.token}
                  updateSearchValue={(e) => this.updateSearchValue(e)}
                  fetchSearch={(e) => this.fetchSearch(e)}/>
          <Switch>
            <Route exact path='/web' component={Home}/>
            <Route exact path='/' component={Home}/>
            <Route path='/web/signin' render={props =>
                <SignIn authUser={this.authUser} token={this.state.token}/>}/>
            <Route path='/web/signup' render={props =>
                <SignUp registerUser={this.registerUser} token={this.state.token}/>}/>
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
            <Route path='/web/search' render={props =>
                <SearchProduct {...props} fetchProducts={(id) => this.fetchSearch(id)}
                    products={this.state.products}
                    categories={this.state.categories}
                    actualSubCategory={this.state.actualSubCategory}
                    actualSearch={this.state.actualSearch}/>}/>}/>
            <Route component={Page404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
