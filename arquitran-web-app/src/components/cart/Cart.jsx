import React, { Component } from 'react';
import CartListItem from './CartListItem';

class Cart extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="cart-list">
        <div className="add-cart-list">
          <h3>Cart</h3>
        </div>
        <div className="cart-list">
          {this.props.shopping_cart.map((item, index) => (
            <CartListItem item={item} key={item.id} index={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
