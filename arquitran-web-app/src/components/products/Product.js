import React, { Component } from 'react';
import AddProductToCart from './AddProductToCart';
import productImg from '../../assets/product.jpg';

class Product extends Component {
  componentWillMount() {
    if (localStorage.getItem("logged_in") === "false"){
      this.props.history.push('/signin');
    }
    this.props.fetchProduct(this.props.match.params.id);
  }

  backToProductsList() {
    this.props.history.push("/products");
  }

  render() {
    if (!this.props.product){
      return (<div>Loading...</div>)
    }
    return (
      <div className="container">
        <button className="mgtop btn btn-outline-secondary"
                onClick={() => this.backToProductsList()}>Back</button>
        <div className="container text-center mgtop mgbottom">
          <h2>{this.props.product.name}</h2>
          <img class="" src={productImg} alt={this.props.product.name} />
          <p>{this.props.product.description}</p>
          <AddProductToCart product={this.props.product}
                            key={this.props.product.id}
                            addProductToCart={this.props.addProductToCart}
                            back={this.props.history.push}/>
        </div>
      </div>

    );
  }

}

export default Product;
