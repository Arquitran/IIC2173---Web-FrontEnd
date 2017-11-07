import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const URL_CATEGORIES = "http://arqss17.ing.puc.cl:3000/categorias";
export const URL_PRODUCTS = "http://arqss17.ing.puc.cl:3000/productos";
export const URL_SIGNUP = "https://private-edb58d-iic2113.apiary-mock.com/api/signup";
export const URL_SIGNIN = "https://private-edb58d-iic2113.apiary-mock.com/api/signin";
export const URL_CART = "https://private-edb58d-iic2113.apiary-mock.com/api/cart"
export const MAX_PAGES = 5;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
