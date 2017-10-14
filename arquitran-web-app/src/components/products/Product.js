import React, { Component } from 'react';
import AddProductToCart from './AddProductToCart';

class Product extends Component {
  componentWillMount() {
    if (localStorage.getItem("logged_in") === "false"){
      this.props.history.push('/signin');
    }
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    if (!this.props.product){
      return (<div>Loading...</div>)
    }
    return (
      <div className="container text-center">
        <h1>{this.props.product.name}</h1>
        <p>{this.props.product.description}</p>
        <AddProductToCart product={this.props.product}
                          key={this.props.product.id}
                          addProductToCart={this.props.addProductToCart}
                          back={this.props.history.push}/>
      </div>
    );
  }

}

export default Product;
