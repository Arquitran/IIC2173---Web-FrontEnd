import React, { Component } from 'react';
import ProductListItem from './ProductListItem';

class ProductsList extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="product-list">
        <div className="add-product-list">
          <h3>ProductsList</h3>
        </div>
        <div className="products-list">
          {this.props.products.map((product, index) => (
            <ProductListItem product={product} key={product.id} index={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsList;
