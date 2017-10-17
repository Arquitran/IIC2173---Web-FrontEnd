import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const URL = "http://arqss17.ing.puc.cl:3000/categorias";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
