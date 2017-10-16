import React, {Component} from 'react';

class AddProductToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addProductToCart(this.props.product.id, this.state.quantity, this.props.product.name);
    this.setStateOnSubmit();
    this.props.back("/products");

  }

  setStateOnSubmit() {
    this.setState({
      quantity: 0,
    });
    this.quantity.value = 0;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="sign-in-form">
        <h4>Add to shopping cart</h4>
        <div className="trip-form">

          <input ref={(input) => this.quantity = input}
            name="quantity"
            onChange={this.handleChange.bind(this)}
            className="form-control quantity-input"
            type="number"
            placeholder='Quantity'
            value={this.state.quantity}/>

          <input
            className="product-btn2 btn btn-success"
            type="submit"
            value="Add to Cart"/>
        </div>
      </form>
    )
  }
}

export default AddProductToCart;
