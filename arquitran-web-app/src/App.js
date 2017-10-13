import React, { Component } from 'react';
import Navbar  from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      products_count: 0,
      actual_product: [],
    }
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
        {"name": "Producto 1", "description": "Description product 1", "id":1},
        {"name": "Producto 2", "description": "Description product 2", "id":2}
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
    //};
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
        "name": "Producto 2", "description": "Description product 2"
      },
      error: null,
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="">
          {React.Children.map(
            this.props.children,
            child => React.cloneElement(child,
              {
                fetchProducts: this.fetchProducts.bind(this),
                fetchProduct:  this.fetchProduct.bind(this),

                products: this.state.products,
                actual_product: this.state.actual_product,
              })
          ) }
        </div>
      </div>
    );
  }
}

export default App;
