import React, {Component} from 'react';

class AddProductToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    }
  }

  handleChange(e) {
    /* FIJADO EN 1
    this.setState({
      [e.target.name]: e.target.value,
    })
    */
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.enableBuy){
      this.props.addProductToCart(this.props.product, this.state.quantity);
      this.setStateOnSubmit();
      this.props.back("/web/categories");
    }


  }

  setStateOnSubmit() {
    this.setState({
      quantity: 0,
    });
    this.quantity.value = 0;
  }

  renderButton() {
    var classButton = "product-btn2 btn btn-success";
    if (!this.props.enableBuy){
      classButton += " disabled"
    }
    return (<input
      className={classButton}
      type="submit"
      value="Add to Cart"/>)
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

          {this.renderButton()}
        </div>
      </form>
    )
  }
}

export default AddProductToCart;
