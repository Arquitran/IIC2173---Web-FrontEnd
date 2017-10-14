import React, {Component} from 'react';
import AddProductToCart from './AddProductToCart';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentWillMount() {
    this.props.fetchProduct(this.props.params.productId);
  }

  render() {
    return (
      <div className='product-view'>
        <div className="product">
          <h1>product</h1>
          {this.props.actual_product.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <h4>{product.description}</h4>
              <AddProductToCart product={product} key={product.id} addProductToCart={this.props.addProductToCart}/>

            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Product;
