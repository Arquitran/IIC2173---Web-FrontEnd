import React, { Component } from 'react';
import Home from '../Home';
import CheckOut from './CheckOut';
import productImg from '../../assets/product.jpg'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      total: 0
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


    const cartitems = this.props.shopping_cart.map((product, idx) => {
      return (
        <div className="card product-item" key={idx}>
            <h5 className="card-header">{product.name}</h5>
            <img className="card-img-top" src={productImg} alt={product.name} />
            <div className="card-body">
              <p className="card-title">${product.price}</p>
            </div>



        </div>
      )
    })

    return (
      <div className="container">

          <div className="mgtop products center-block text-center">
          <h2>Cart</h2>
          <br/>
          <h5>Total: ${this.props.total_price}</h5>
          <br/>
          <button className="btn btn-outline-warning" onClick={() => this.checkOut()}>Check Out</button>
          <div className="add-cart-list">

          </div>
          <div className="card-columns">
            {cartitems}
          </div>
        </div>
      </div>

    );
  }

}

export default Cart;
