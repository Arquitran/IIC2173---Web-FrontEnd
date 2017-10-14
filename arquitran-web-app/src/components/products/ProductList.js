import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {

    const products = this.props.products.map((product, index) => {
      return (
        <div className="card product-item" key={product.id}>
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.description}</p>
            <Link className="product-btn btn btn-outline-success" to={`/products/${product.id}`}>Buy</Link>
          </div>
        </div>

    )}
    );

    return (
      <div className="products container center-block text-center">
        <div>
          <h3>ProductsList</h3>
        </div>
          {products}
      </div>
  )}

}

export default ProductList;
