import React, {Component} from 'react';

class AddProductToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    }
  }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    console.log('handleSubmit', this.state.quantity);
    this.props.addProductToCart(this.props.product.id, this.state.quantity);
    this.setStateOnSubmit()
    event.preventDefault();
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
        <h1>Add to shopping cart</h1>
        <div className="trip-form">

          <input ref={(input) => this.quantity = input}
            name="quantity"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="number" placeholder='Quantity'/>

          <input
            className="btn btn-default"
            type="submit"
            value="Add"/>
        </div>
      </form>
    )
  }
}

export default AddProductToCart;
