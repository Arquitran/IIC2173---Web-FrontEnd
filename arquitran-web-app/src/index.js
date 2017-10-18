import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const URL_CATEGORIES = "http://arqss4.ing.puc.cl:3000/categorias";
export const URL_PRODUCTS = "http://arqss4.ing.puc.cl:3000/productos";
export const MAX_PAGES = 5;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
