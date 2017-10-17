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
    if (this.props.product.context !== "MEDICAMENTOS"){
      this.props.addProductToCart(this.props.product, this.state.quantity);
      this.setStateOnSubmit();
      this.props.back("/products");
    }


  }

  setStateOnSubmit() {
    this.setState({
      quantity: 0,
    });
    this.quantity.value = 0;
  }

  render() {
    var classButton = "product-btn2 btn btn-success";
    if (this.props.product.context === "MEDICAMENTOS"){
      classButton += " disabled"
    }
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
            className={classButton}
            type="submit"
            value="Add to Cart"/>
        </div>
      </form>
    )
  }
}

export default AddProductToCart;
