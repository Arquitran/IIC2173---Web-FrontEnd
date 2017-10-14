import React, { Component } from 'react';
import Home from '../Home';

class Cart extends Component {

  render() {
    if (localStorage.getItem("logged_in") === "false"){
      return <Home/>
    }
    const cartitems = this.props.shopping_cart.map((product) => {
      return (
        <div className="card product-item" key={product.id}>
          <div className="card-body">
            <h4>Item: {product.id}</h4>
            <h5>Quantity: {product.quantity}</h5>
            <h5>Product Id: {product.product_id}</h5>
          </div>
        </div>
      )
    })

    return (
      <div className="products container center-block text-center">
        <div className="add-cart-list">
          <h3>Cart</h3>
        </div>
        <div className="cart-list">
          {cartitems}
        </div>
      </div>
    );
  }

}

export default Cart;
