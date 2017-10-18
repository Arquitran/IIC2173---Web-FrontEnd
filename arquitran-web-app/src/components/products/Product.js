import React, { Component } from 'react';
import AddProductToCart from './AddProductToCart';
import productImg from '../../assets/product.jpg';

class Product extends Component {
  componentWillMount() {
    if (localStorage.getItem("logged_in") === "false"){
      this.props.history.push('/signin');
    }
    this.props.fetchProduct(parseInt(this.props.match.params.id, 10));
  }

  backToProductsList() {
    this.props.history.push(`/categories/${this.props.match.params.idSubCategory}`);
  }

  render() {
    if (!this.props.product){
      return (
        <div className="container">
          <button className="mgtop btn btn-outline-secondary"
                  onClick={() => this.backToProductsList()}>Back</button>
          <h3 className="text-center mgtop">Loading...</h3>
        </div>
        )
    }
    return (
      <div className="container">
        <button className="mgtop btn btn-outline-secondary"
                onClick={() => this.backToProductsList()}>Back</button>
        <div className="container text-center mgtop mgbottom">
          <h2>{this.props.product.name}</h2>
          <img src={productImg} alt={this.props.product.name} />
          <h4>${this.props.product.price}</h4>
          <br/>
          <br/>
          <AddProductToCart product={this.props.product}
                            key={this.props.product.id}
                            addProductToCart={this.props.addProductToCart}
                            back={this.props.history.push}
                            enableBuy={this.props.enableBuy}/>
        </div>
      </div>

    );
  }

}

export default Product;
