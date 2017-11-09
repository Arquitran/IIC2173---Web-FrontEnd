import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const URL_CATEGORIES = "http://arqss17.ing.puc.cl:3000/categorias";
export const URL_PRODUCTS = "http://arqss17.ing.puc.cl:3000/products";
export const URL_SIGNUP = "https:///arqss4.ing.puc.cl/api/signup";
export const URL_SIGNIN = "https:///arqss4.ing.puc.cl/api/signin";
export const URL_CART = "https://arqss5.ing.puc.cl/api/cart";
export const URL_HISTORY = "https://arqss5.ing.puc.cl/api/cart/history"
export const MAX_PAGES = 2;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
