import React, { Component } from 'react';
import Home from '../Home';
import CheckOut from './CheckOut';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false
    }
  }

  checkOut() {
    console.log("Checkout");
    this.setState({ checkout: true })
  }

  back() {
    console.log("Back");
    this.setState({ checkout: false })
  }

  render() {
    if (localStorage.getItem("logged_in") === "false"){
      return <Home/>
    }

    if (this.state.checkout) {
      return (
        <CheckOut submitOrder={this.props.submitOrder}
                  back={() => this.back()}
                  />
      );
    }


    const cartitems = this.props.shopping_cart.map((product) => {
      return (
        <div className="card product-item" key={product.id}>
          <div className="card-body">
            <h4>{product.name}</h4>
            <h5>Quantity: {product.quantity}</h5>
            <h5>Product Id: {product.product_id}</h5>
          </div>
        </div>
      )
    })

    return (
      <div className="mgtop products container center-block text-center">
        <div className="add-cart-list">
          <h2>Cart</h2>
        </div>
        <div className="cart-list">
          {cartitems}
        </div>
        <button className="btn btn-outline-warning right-btn" onClick={() => this.checkOut()}>Check Out</button>
      </div>
    );
  }

}

export default Cart;
