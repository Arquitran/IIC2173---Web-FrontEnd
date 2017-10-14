import React, { Component } from 'react';

class CartListItem extends Component {

  render() {
    return (
      <div className="col col-md-2" >
        <h4>---------------</h4>
        <h4>Item Id: {this.props.item.id}</h4>
        <h5>Quantity: {this.props.item.quantity}</h5>
        <h5>Product Id: {this.props.item.product_id}</h5>
          <h4>---------------</h4>

      </div>
    );
  }
}

export default CartListItem;
