import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const URL_CATEGORIES = "https://private-edb58d-iic2113.apiary-mock.com/api/categories";
export const URL_PRODUCTS = "https://private-edb58d-iic2113.apiary-mock.com/api/products";
export const URL_PRODUCT = "https://private-edb58d-iic2113.apiary-mock.com/api/product";
/*
export const URL_CATEGORIES = "https://arqss5.ing.puc.cl/web/categorias";
export const URL_PRODUCTS = "https://arqss5.ing.puc.cl/web/productos";
*/

export const URL_HISTORY = "https://private-edb58d-iic2113.apiary-mock.com/api/cart/history";
export const URL_SIGNUP = "https:///arqss4.ing.puc.cl/api/signup";
export const URL_SIGNIN = "https:///arqss4.ing.puc.cl/api/signin";
export const URL_CART = "https://arqss4.ing.puc.cl/api/cart";
//export const URL_HISTORY = "https://arqss4.ing.puc.cl/api/cart/history"
export const MAX_PAGES = 2;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
