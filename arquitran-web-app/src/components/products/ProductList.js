import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productImg from '../../assets/product.jpg';

class ProductList extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {

    const products = this.props.products.map((product, index) => {
      return (
        <div key={product.id}>
          <Link className="card list-group-item-action" to={`/products/${product.id}`} style={{ textDecoration: 'none', color:'black' }}>
            <img class="card-img-top" src={productImg} alt={product.name} />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.description}</p>
            </div>
          </Link>
        </div>



    )}
    );

    return (
      <div className="mgtop products container center-block text-center">
        <div>
          <h2 className="mgbottom">ProductsList</h2>
        </div>
        <div className="card-columns">
          {products}
        </div>

      </div>
  )}

}

export default ProductList;
