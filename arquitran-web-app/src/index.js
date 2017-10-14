import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import ProductsList from './components/products/ProductsList';
import Product from './components/products/Product';
import SignIn from './components/users/SignIn';
import Cart from './components/cart/Cart';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/products" component={ProductsList}/>
      <Route path="/products/:productId" component={Product}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/cart" component={Cart}/>

    </Route>
  </Router>
, document.getElementById('root'));
